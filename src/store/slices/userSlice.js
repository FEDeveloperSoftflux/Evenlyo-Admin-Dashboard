import { createSlice } from '@reduxjs/toolkit';
import * as userService from '../../service/userService';

const initialState = {
  clients: [],
  vendors: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = !!action.payload;
    },
    setClients: (state, action) => {
      state.clients = action.payload || [];
      state.isLoading = false;
      state.error = null;
    },
    setVendors: (state, action) => {
      state.vendors = action.payload || [];
      state.isLoading = false;
      state.error = null;
    },
    updateUserStatus: (state, action) => {
      const { id, type, status } = action.payload || {};
      const list = type === 'vendor' ? state.vendors : state.clients;
      const idx = list.findIndex((u) => u.id === id || u._id === id);
      if (idx >= 0) {
        list[idx].status = status;
      }
      state.isLoading = false;
    },
    setError: (state, action) => {
      state.error = action.payload || null;
      state.isLoading = false;
    },
  },
});

export const { setLoading, setClients, setVendors, updateUserStatus, setError } = userSlice.actions;
export default userSlice.reducer;

// Thunks
export const fetchClients = (params) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const resp = await userService.getClients(params);
    if (resp && resp.status >= 200 && resp.status < 300) {
      const data = resp.data?.data || resp.data || [];
      dispatch(setClients(data));
      return { ok: true, data };
    }
    dispatch(setError('Failed to fetch clients'));
    return { ok: false };
  } catch (err) {
    dispatch(setError(err?.message || 'Failed to fetch clients'));
    return { ok: false };
  }
};

export const fetchVendors = (params) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const resp = await userService.getVendors(params);
    if (resp && resp.status >= 200 && resp.status < 300) {
      const data = resp.data?.data || resp.data || [];
      dispatch(setVendors(data));
      return { ok: true, data };
    }
    dispatch(setError('Failed to fetch vendors'));
    return { ok: false };
  } catch (err) {
    dispatch(setError(err?.message || 'Failed to fetch vendors'));
    return { ok: false };
  }
};

export const changeClientStatus = (id, actionType = 'block') => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const resp = await userService.blockClient(id, { action: actionType });
    if (resp && resp.status >= 200 && resp.status < 300) {
      // backend returns success and we send action: 'block' or 'unblock'
      const returnedAction = resp.data?.action || actionType;
      const status = returnedAction === 'block' ? 'blocked' : 'active';
      dispatch(updateUserStatus({ id, type: 'client', status }));
      return { ok: true };
    }
    dispatch(setError('Failed to update client status'));
    return { ok: false };
  } catch (err) {
    dispatch(setError(err?.message || 'Failed to update client status'));
    return { ok: false };
  }
};

export const changeVendorStatus = (id, actionType = 'block') => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const resp = await userService.blockVendor(id, { action: actionType });
    if (resp && resp.status >= 200 && resp.status < 300) {
      const returnedAction = resp.data?.action || actionType;
      const status = returnedAction === 'block' ? 'blocked' : 'active';
      dispatch(updateUserStatus({ id, type: 'vendor', status }));
      return { ok: true };
    }
    dispatch(setError('Failed to update vendor status'));
    return { ok: false };
  } catch (err) {
    dispatch(setError(err?.message || 'Failed to update vendor status'));
    return { ok: false };
  }
};

export const sendVendorEmail = (params) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const resp = await userService.sendEmailToVendor(params);
    if (resp && resp.status >= 200 && resp.status < 300) {
      dispatch(setLoading(false));
      return { ok: true };
    }
    dispatch(setError('Failed to send email to vendor'));
    return { ok: false };
  } catch (err) {
    dispatch(setError(err?.message || 'Failed to send email to vendor'));
    return { ok: false };
  }
};

export const sendClientsEmail = (params) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const resp = await userService.sendEmailToClients(params);
    if (resp && resp.status >= 200 && resp.status < 300) {
      dispatch(setLoading(false));
      return { ok: true };
    }
    dispatch(setError('Failed to send email to clients'));
    return { ok: false };
  } catch (err) {
    dispatch(setError(err?.message || 'Failed to send email to clients'));
    return { ok: false };
  }
};
