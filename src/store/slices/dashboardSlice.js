import { createSlice } from '@reduxjs/toolkit';
import * as dashboardService from '../../service/dashboardService';

const initialState = {
  statsCard: {},
  monthlyBookingData: [],
  recentBookings: [],
  recentClients: [],
  recentVendors: [],
  isLoading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setDashboardData: (state, action) => {
      const { statsCard, monthlyBookingData, recentBookings, recentClients, recentVendors } = action.payload;
      state.statsCard = statsCard || {};
      state.monthlyBookingData = monthlyBookingData || [];
      state.recentBookings = recentBookings || [];
      state.recentClients = recentClients || [];
      state.recentVendors = recentVendors || [];
      state.isLoading = false;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setLoading, setDashboardData, setError } = dashboardSlice.actions;
export default dashboardSlice.reducer;

export const fetchDashboardStats = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await dashboardService.getStats();
    
    if (response && response.status >= 200 && response.status < 300) {
      const data = response.data?.data || response.data;
      dispatch(setDashboardData(data));
    } else {
      dispatch(setError('Failed to fetch dashboard data'));
    }
  } catch (error) {
    dispatch(setError(error?.message || 'Failed to fetch dashboard data'));
  }
};