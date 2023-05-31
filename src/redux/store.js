import { configureStore } from "@reduxjs/toolkit"; //eslint-disable-line
import rocketReducer from './rockets/RocketSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
  },
});

export default store;
