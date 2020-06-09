import * as types from '../constants';

export const SetUserData = (payload: any) => {
  return { type: types.SET_USER_DATA, payload };
};
