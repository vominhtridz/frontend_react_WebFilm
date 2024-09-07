import { AxiosPublic } from "../apis/ServerApi"

const useRefreshToken = ({ setAuth }) => {
  const refresh = async () => {
    const response = await AxiosPublic.get("/refresh", {
      withCredentials: true,
    })
    setAuth(prev => {
      return { ...prev, accessToken: response.data.accessToken }
    })
    return response.data.accessToken
  }
  return refresh
}

export default useRefreshToken
