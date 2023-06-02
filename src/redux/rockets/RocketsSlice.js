import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
};

export const fetchRockets = createAsyncThunk(
  'rocket/fetchRockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const data = await response.json();
    return data;
  } //eslint-disable-line
);

const rocketsSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    bookRocket: (state, action) => {
      const rocketItems = state.rockets.map((item) => {
        if (item.id !== action.payload) {
          return item;
        }
        return { ...item, reserved: !item.reserved };
      });
      return {
        ...state,
        rockets: rocketItems,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.rockets = action.payload;
    });
  },
});

export const { bookRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
