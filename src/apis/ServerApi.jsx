const apiServer = "http://localhost:1000"
import axios from "axios"
export const AxiosPrivate = axios.create({
  baseURL: apiServer,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
})
export const AxiosPublic = axios.create({
  baseURL: apiServer,
})

export const getUser = () => axios.get(`${apiServer}/user`)
export const CreateUser = payload =>
  axios.post(`${apiServer}/user/register`, payload, {
    headers: { "Content-Type": "application/json" },
  })
export const LoginUser = payload =>
  axios.post(`${apiServer}/user/login`, payload, {
    headers: { "Content-Type": "application/json" },
  })
export const RefreshToken = () => axios.get(`${apiServer}/refresh`, { withCredentials: true })
export const LogOut = () => axios.post(`${apiServer}/user/logout`, { withCredentials: true })
