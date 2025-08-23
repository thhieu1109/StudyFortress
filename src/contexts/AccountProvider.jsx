import { createContext, useContext, useEffect, useState } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";

// Tạo Context
const AccountsContext = createContext();

// Custom hook để dễ sử dụng
export const useAccounts = () => useContext(AccountsContext);

function AccountsProvider({children}) {

    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        getAllAccount();
    }, []);

    const getAllAccount = async () => {
       fetchDocumentsRealtime("accounts", (items) => {
             setAccounts(items);
       });
    }

    return (
        <AccountsContext.Provider value={accounts}>
            {children}
        </AccountsContext.Provider>
    );
}

export default AccountsProvider;