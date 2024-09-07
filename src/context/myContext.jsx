import { createContext } from "react"

export const mycontext = createContext({
  VisibMessLabel: false,
  setVisibMessLabel: () => {},
  MessLabel: {
    title: "",
    icon: null,
  },
  setUserInfor: () => {},
  UserInfor: {},
  setAuth: () => {},
  Auth: {},
  setMessLabel: () => {},
})
