import { AxiosResponse } from 'axios';
import $api from './api';

export interface AuthResponse {
  accessToken: null | string;
  refreshToken: null | string;
}

export default class AuthService {
  static async registration(
    email: string,
    login: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/Values/registration', { email, login, password });
  }
}
