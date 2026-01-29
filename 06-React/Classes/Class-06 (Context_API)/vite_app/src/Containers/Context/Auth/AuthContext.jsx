import { useContext, useState, createContext } from 'react'
const UserContext = createContext(null)

export default function AuthContext({ children }) {

    const [users, setUsers] = useState({})
    

    const UserLogin = (UserData) => {
        setUsers(UserData)
        console.log(UserData.email);
        sessionStorage.setItem("Data", JSON.stringify({ UserData }));
    }

    const UserLogout = () => {
        setUsers(null)
    }

    return (

        <UserContext.Provider value={{ users, UserLogin, UserLogout }}>
            {children}
        </UserContext.Provider>

    )
}

export const userContextData = () => useContext(UserContext)
