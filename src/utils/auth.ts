export const setTokenToLS = (accessToken: string, refreshToken: string) => {
  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem('refreshToken', refreshToken)
}

export const getAccessTokenFromLS = () => {
  return localStorage.getItem('accessToken')
}
