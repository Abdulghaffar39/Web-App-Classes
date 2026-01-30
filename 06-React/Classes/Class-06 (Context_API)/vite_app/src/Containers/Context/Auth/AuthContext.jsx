import { useContext, useState, createContext, useEffect } from 'react'
import { useCookies } from "react-cookie";
const UserContext = createContext(null)

export default function AuthContext({ children }) {

    // const [users, setUsers] = useState({})
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const Token = cookies.token;

        if (Token) {
            fetchUser(Token);
        } else {
            setLoading(false);
        }
    }, [cookies.token]);

    const fetchUser = async (Token) => {
        try {
            const res = await fetch("http://localhost:3000/api/login", {
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            if (!res.ok) throw new Error("Unauthorized");

            const data = await res.json();
            setUsers(data.user);
        } catch (err) {
            console.error(err);
            UserLogout();
        } finally {
            setLoading(false);
        }
    };

    const UserLogin = (userData, Token) => {
        setCookie("token", Token, {
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 7 days
            sameSite: "strict",
        });

        setUsers(userData);
    };

    const UserLogout = () => {
        removeCookie("token", { path: "/" });
        setUsers(null);
    };



    // const UserLogin = (UserData) => {
    //     setUsers(UserData)
    //     console.log(UserData.email);
    //     sessionStorage.setItem("Data", JSON.stringify({ UserData }));
    // }

    // const UserLogout = () => {
    //     setUsers(null)
    // }

    return (

        <UserContext.Provider value={{ users, UserLogin, UserLogout, loading }}>
            {children}
        </UserContext.Provider>

    )
}

export const userContextData = () => useContext(UserContext)
