
import { configureStore } from "@reduxjs/toolkit"; //eslint-disable-line
import rocketReducer from './rockets/RocketSlice';
import missionsReducer from './mission/missionSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    missions: missionsReducer,
  },
});

export default store;
