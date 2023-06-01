import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const missionUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  isLoading: false,
};

export const fetchMissions = createAsyncThunk('mission/fetchmissions', async () => {
  const response = await fetch(missionUrl);
  const data = await response.json();
  const missionList = data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
  }));
  return missionList;
});
const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending,
      (state) => {
        const isLoading = true;
        return {
          ...state,
          isLoading,
        };
      });
    builder.addCase(fetchMissions.fulfilled,
      (state, action) => {
        const isLoading = false;
        const missions = action.payload;

        return {
          ...state,
          missions,
          isLoading,
        };
      });
  },
});

export default missionSlice.reducer;
