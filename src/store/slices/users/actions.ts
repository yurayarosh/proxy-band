import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseApi } from '../../../api/api';
import { Id } from '../../../types/users';

export const fetchUsers = createAsyncThunk('users/fetchAllUsers', async (_, thunkAPI) => {
  try {
    return await baseApi
      .get('users')
      .then(res => {
        return res.data;
      })
      .catch(e => {
        return thunkAPI.rejectWithValue(e.response?.data);
      });
  } catch (e) {
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});

export const fetchPosts = createAsyncThunk(
  'users/fetchPosts',
  async ({ userId }: { userId: Id }, thunkAPI) => {
    try {
      return await baseApi
        .get(`posts?userId=${userId}`)
        .then(res => {
          return res.data;
        })
        .catch(e => {
          return thunkAPI.rejectWithValue(e.response?.data);
        });
    } catch (e) {
      return thunkAPI.rejectWithValue((e as Error).message);
    }
  }
);

export const fetchAlbums = createAsyncThunk(
  'users/fetchAlbums',
  async ({ userId }: { userId: Id }, thunkAPI) => {
    try {
      return await baseApi
        .get(`albums?userId=${userId}`)
        .then(res => {
          return res.data;
        })
        .catch(e => {
          return thunkAPI.rejectWithValue(e.response?.data);
        });
    } catch (e) {
      return thunkAPI.rejectWithValue((e as Error).message);
    }
  }
);
