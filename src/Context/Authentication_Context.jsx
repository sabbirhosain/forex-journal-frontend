import { createContext, useContext } from "react"

const AuthenticationContextProvider = createContext()
const Authentication_Context = ({ children }) => {

  return (
    <AuthenticationContextProvider.Provider value={{}}>
      {children}
    </AuthenticationContextProvider.Provider>
  )
}

export default Authentication_Context

// coustom hooks
export const useAuthenticationContextProvider = () => {
  return useContext(AuthenticationContextProvider)
};