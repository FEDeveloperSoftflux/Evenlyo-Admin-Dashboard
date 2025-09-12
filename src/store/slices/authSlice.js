import { createSlice } from '@reduxjs/toolkit';
import * as authService from '../../service/authService';

// Initial state
const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
};

// Read persisted auth from localStorage (keys used by the app)
const checkAuthState = () => {
  const userRaw = localStorage.getItem('user');

  const user = userRaw ? JSON.parse(userRaw) : null;

  if (user) {
    return {
      user,
      token: null,
      isAuthenticated: true,
    };
  }

  return {
    user: null,
    token: null,
    isAuthenticated: false,
  };
};

const persisted = checkAuthState();

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    ...initialState,
    ...persisted,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = !!action.payload;
    },
    setUser: (state, action) => {
      const { user, token } = action.payload || {};
      state.user = user || null;
      state.token = token || null;
      state.isAuthenticated = !!(user && token);
      state.error = null;
      state.isLoading = false;
    },
    setError: (state, action) => {
      state.error = action.payload || 'Login failed';
      state.isLoading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      state.isLoading = false;
      try {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      } catch {
        // ignore
      }
    },
  },
});

export const { setLoading, setUser, setError, clearError, logout } = authSlice.actions;
export default authSlice.reducer;

// Async action creators (thunks) that centralize API calls in Redux
export const loginAdmin = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const resp = await authService.login({ email, password });

    if (resp && resp.status >= 200 && resp.status < 300) {
      // After successful login the backend should set an httpOnly session cookie.
      // Fetch the user via verifySession to get the current user object.
      const me = await authService.verifySession();
      if (me && me.status >= 200 && me.status < 300) {
        const user = me.data || me.data?.data || null;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          dispatch(setUser({ user, token: null }));
          return { ok: true, user };
        }
      }
      dispatch(setError('Unable to fetch user after login'));
      return { ok: false };
    }

    const msg = (resp && resp.data && resp.data.message) ? resp.data.message : 'Login failed';
    dispatch(setError(msg));
    return { ok: false, message: msg };
  } catch (err) {
    dispatch(setError(err?.message || 'Login failed'));
    return { ok: false, message: err?.message };
  }
};

export const logoutAdmin = () => async (dispatch) => {
  try {
    await authService.logout();
  } catch {
    // ignore api errors
  }
  dispatch(logout());
  return true;
};