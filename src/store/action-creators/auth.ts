import { Dispatch } from 'react';
import AuthService from '~/services/AuthService';
import { AuthAction, AuthActionTypes } from '~/types/auth';

export const registration = (email: string, login: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: AuthActionTypes.REGISTRATION });
      const response = await AuthService.registration(email, login, password);
      dispatch({ type: AuthActionTypes.REGISTRATION_SUCCESS, payload: response.data });
    } catch (ex) {
      dispatch({ type: AuthActionTypes.REGISTRATION_ERROR, payload: 'Error' });
    }
  };
};
