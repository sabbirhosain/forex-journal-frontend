import { createContext, useContext } from "react"



const WithdrawStatementContextProvider = createContext()
const Withdraw_Statement_Context = ({ children }) => {
    return (
        <WithdrawStatementContextProvider.Provider value={{}}>
            {children}
        </WithdrawStatementContextProvider.Provider>
    )
}

export default Withdraw_Statement_Context

// coustom hooks
export const useWithdrawStatementContextProvider = () => {
    return useContext(WithdrawStatementContextProvider)
};