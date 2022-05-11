import { createSlice } from '@reduxjs/toolkit';

import { reverseSorting } from '../core/utils/pages';

const initialState = {
  currentPage: 1,
  postsPerPage: 10,
  posts: [],
  searchQuery: '',
  sortBy: 'id',
  sortOrderById: 'asc',
  sortOrderByTitle: 'asc',
  sortOrderByBody: 'asc',
};

const registrySlice = createSlice({
  name: 'registry',
  initialState,
  reducers: {
    incrementPageNumber: (state) => {
      state.currentPage = state.currentPage + 1;
    },
    decrementPageNumber: (state) => {
      state.currentPage = state.currentPage - 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSortOrderById: (state) => {
      state.sortOrderById = reverseSorting(state.sortOrderById);
    },
    setSortOrderByTitle: (state) => {
      state.sortOrderByTitle = reverseSorting(state.sortOrderByTitle);
    },
    setSortOrderByBody: (state) => {
      state.sortOrderByBody = reverseSorting(state.sortOrderByBody);
    },
  },
});

export const registryReducer = registrySlice.reducer;
export const registryActions = registrySlice.actions;
