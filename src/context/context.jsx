import { useContext, useState } from "react"
import { mycontext } from "./myContext"
const MyProvider = ({ children }) => {
  const [MessLabel, setMessLabel] = useState({
    title: "",
    icon: null,
    color: "",
  })
  const [Auth, setAuth] = useState()
  const [UserInfor, setUserInfor] = useState()
  const [VisibMessLabel, setVisibMessLabel] = useState(false)
  let context = {
    VisibMessLabel,
    setVisibMessLabel,
    MessLabel,
    setMessLabel,
    setAuth,
    Auth,
    setUserInfor,
    UserInfor,
  }
  return <mycontext.Provider value={context}>{children}</mycontext.Provider>
}

const useMyContext = () => {
  const context = useContext(mycontext)
  if (!context) {
    throw new Error("usecontext is within my provicer! or not created context!")
  }
  return context
}
export { useMyContext, MyProvider }
