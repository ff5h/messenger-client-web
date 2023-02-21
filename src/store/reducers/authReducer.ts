import { AuthAction, AuthActionTypes, AuthState } from '~/types/auth';

const initialState: AuthState = {
  tokens: { accessToken: null, refreshToken: null },
  loading: false,
  error: null
};

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.REGISTRATION:
      return { tokens: { accessToken: null, refreshToken: null }, loading: true, error: null };
    case AuthActionTypes.REGISTRATION_SUCCESS:
      return {
        tokens: {
          ...action.payload
        },
        loading: false,
        error: null
      };
    case AuthActionTypes.REGISTRATION_ERROR:
      return {
        tokens: { accessToken: null, refreshToken: null },
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
