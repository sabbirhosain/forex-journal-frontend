import { createContext, useContext } from "react"

const TradingJournalContextProvider = createContext()
const Trading_Journal_Context = ({ children }) => {


    
    return (
        <TradingJournalContextProvider.Provider value={{}}>
            {children}
        </TradingJournalContextProvider.Provider>
    )
}

export default Trading_Journal_Context

// coustom hooks
export const useTradingJournalContextProvider = () => {
    return useContext(TradingJournalContextProvider)
};