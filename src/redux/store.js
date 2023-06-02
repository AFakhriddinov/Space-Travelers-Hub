import { configureStore } from '@reduxjs/toolkit'; //eslint-disable-line
import rocketsReducer from './rockets/RocketsSlice';
import missionsReducer from './mission/missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;
