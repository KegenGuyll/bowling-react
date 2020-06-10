import { combineReducers } from 'redux';
import userSlice from '../slice/userSlice';
import scoreSlice from '../slice/scoreSlice';

const rootReducer = combineReducers({
  user: userSlice,
  score: scoreSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
