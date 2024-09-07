import { useEffect } from "react"
import { useMyContext } from "../context/context"
import useRefreshToken from "./useRefreshToken"
import { AxiosPrivate } from "../apis/ServerApi"

const useAxiosPrivate = () => {
  const { Auth, setAuth } = useMyContext()
  const refresh = useRefreshToken({ setAuth })
  useEffect(() => {
    const requestIntercept = AxiosPrivate.interceptors.request.use(
      config => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${Auth?.accessToken}`
        }
        return config
      },
      error => Promise.reject(error),
    )

    const responseIntercept = AxiosPrivate.interceptors.response.use(
      response => {
        return response
      },
      async error => {
        const prevRequest = error?.config
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true
          const newAccessToken = await refresh()
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`
          return AxiosPrivate(prevRequest)
        }
        return Promise.reject(error)
      },
    )

    return () => {
      AxiosPrivate.interceptors.request.eject(requestIntercept)
      AxiosPrivate.interceptors.response.eject(responseIntercept)
    }
  }, [Auth, refresh])

  return AxiosPrivate
}

export default useAxiosPrivate
