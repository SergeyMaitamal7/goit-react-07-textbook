import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './constans';

const filtersInitialState = {
  status: statusFilters.all,
};
export const FiltersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = FiltersSlice.actions;
export const filtersReducer = FiltersSlice.reducer; 
