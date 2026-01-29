import { useEffect, useState } from "react";
import Login from "../../Services/auth/authLogin";
import { userContextData } from "../Context/Auth/Authcontext";
import { useNavigate } from "react-router";

const LoginForm = () => {
    const [userRender, setUserRander] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [shouldLogin, setShouldLogin] = useState(false);
    const { UserLogin } = userContextData();
    let navigate = useNavigate()
    

    useEffect(() => {
        if (!shouldLogin) return;

        const handleLogin = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const userData = await Login(email, password);
                setUserRander(userData)
                UserLogin(userData.user)
                navigate("/setting")
                
            } catch (err) {
                setError(err.message || "Login failed");
                setUserRander(null);
            } finally {
                setIsLoading(false);
                setShouldLogin(false); // reset trigger
            }
        };

        handleLogin();
    }, [shouldLogin, email, password]);

    return (
        <div>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button
                onClick={() => setShouldLogin(true)}
                disabled={isLoading || !email || !password}
            >
                {isLoading ? "Login in..." : "Login"}
            </button>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {userRender && <h2>Welcome, {`${userRender.user.fname}  ${userRender.user.lname}`}</h2>}

        </div>
    );
};

export default LoginForm;