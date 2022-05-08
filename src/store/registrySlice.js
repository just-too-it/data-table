import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
  postsPerPage: 10,
  posts: [],
  searchQuery: '',
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
  },
});

export const registryReducer = registrySlice.reducer;
export const registryActions = registrySlice.actions;
