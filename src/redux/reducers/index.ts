import { AnyAction } from 'redux';
import * as types from '../constants';

export interface InitialState {}

const initialState: InitialState = {};

const rootReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case types.SET_USER_DATA:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default rootReducer;
