import axios, { AxiosInstance } from 'axios'
import config from '../constants/config'
import { AuthResponse } from '../types/auth.type'
import { setProfileToLs, setTokenToLS } from './auth'

class Http {
  instance: AxiosInstance
  private accessToken: string
  private refreshToken: string
  constructor() {
    this.accessToken = ''
    this.refreshToken = ''
    this.instance = axios.create({
      baseURL: config.baseUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken) {
          config.headers.authorization = this.accessToken
          return config
        }

        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === '/users/auth/login') {
          this.accessToken = (response.data as AuthResponse).data.token.accessToken
          this.refreshToken = (response.data as AuthResponse).data.token.refreshToken
          setTokenToLS(this.accessToken, this.refreshToken)
          setProfileToLs((response.data as AuthResponse).data.user)
        }
        return response
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
