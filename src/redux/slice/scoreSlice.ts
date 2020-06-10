import { createSlice } from '@reduxjs/toolkit';

type scoreData = {
  games: number;
  average: number;
  high: number;
  low: number;
  totalScore: number;
};

let initialState: scoreData = {
  games: 0,
  average: 0,
  high: 0,
  low: 0,
  totalScore: 0,
};

const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    setUserScores(state, action) {
      const { games, average, high, low, totalScore } = action.payload;
      state.games = games;
      state.average = average;
      state.high = high;
      state.low = low;
      state.totalScore = totalScore;
    },
    clearUserScores(state, action) {
      state.games = 0;
      state.average = 0;
      state.high = 0;
      state.low = 0;
      state.totalScore = 0;
    },
  },
});

export const { setUserScores, clearUserScores } = scoreSlice.actions;

export default scoreSlice.reducer;
