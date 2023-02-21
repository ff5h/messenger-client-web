import { AuthResponse } from '~/services/AuthService';

export interface AuthState {
  tokens: AuthResponse;
  loading: boolean;
  error: null | string;
}

export enum AuthActionTypes {
  REGISTRATION = 'REGISTRATION',
  REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS',
  REGISTRATION_ERROR = 'REGISTRATION_ERROR'
}

interface RegistrationAction {
  type: AuthActionTypes.REGISTRATION;
}

interface RegistrationSuccessAction {
  type: AuthActionTypes.REGISTRATION_SUCCESS;
  payload: AuthResponse;
}

interface RegistrationErrorAction {
  type: AuthActionTypes.REGISTRATION_ERROR;
  payload: string;
}

export type AuthAction = RegistrationAction | RegistrationSuccessAction | RegistrationErrorAction;
