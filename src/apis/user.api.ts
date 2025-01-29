import { AuthResponse } from '../types/auth.type'
import http from '../utils/http'

const userApi = {
  registerAccount: (body: { name: string; email: string; password: string }) => {
    return http.post<{ message: string }>('/users/auth/register', body)
  },
  login: (body: { email: string; password: string }) => {
    return http.post<AuthResponse>('/users/auth/login', body)
  },
  loginByGoogle: () => {
    return http.get('/users/auth/google')
  }
}

export default userApi
