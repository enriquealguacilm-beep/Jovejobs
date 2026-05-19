import { AuthContext } from "./AuthContext";

export const AuthContextProvider = ({children}) => {
  return (
    <AuthContext.Provider value={children}>
      {children}
    </AuthContext.Provider>
  )
}
