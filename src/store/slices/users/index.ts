import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Err, IAlbum, IPost, IUser, IUsersState } from '../../../types/users';
import { fetchAlbums, fetchPosts, fetchUsers } from './actions';

const initialStateUsers: IUsersState = {
  isUsersLoading: false,
  isPostsLoading: false,
  isAlbumsLoading: false,
  users: null,
  posts: null,
  albums: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialStateUsers,
  reducers: {
    setUsers: (state, action: PayloadAction<IUser[] | null>) => {
      state.users = action.payload;
    },
    setPosts: (state, action: PayloadAction<IPost[] | null>) => {
      state.posts = action.payload;
    },
    setAlbums: (state, action: PayloadAction<IAlbum[] | null>) => {
      state.albums = action.payload;
    },
  },
  extraReducers: {
    [fetchUsers.pending.type]: state => {
      state.isUsersLoading = true;
    },
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isUsersLoading = false;
      state.users = action.payload;
      state.usersError = '';
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<Err>) => {
      state.isUsersLoading = false;
      state.usersError = action.payload;
    },

    [fetchPosts.pending.type]: state => {
      state.isPostsLoading = true;
    },
    [fetchPosts.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
      state.isPostsLoading = false;
      state.posts = action.payload;
      state.postsError = '';
    },
    [fetchPosts.rejected.type]: (state, action: PayloadAction<Err>) => {
      state.isPostsLoading = false;
      state.postsError = action.payload;
    },

    [fetchAlbums.pending.type]: state => {
      state.isAlbumsLoading = true;
    },
    [fetchAlbums.fulfilled.type]: (state, action: PayloadAction<IAlbum[]>) => {
      state.isAlbumsLoading = false;
      state.albums = action.payload;
      state.albumsError = '';
    },
    [fetchAlbums.rejected.type]: (state, action: PayloadAction<Err>) => {
      state.isPostsLoading = false;
      state.albumsError = action.payload;
    },
  },
});

export const { setUsers, setPosts, setAlbums } = usersSlice.actions;

export default usersSlice.reducer;
