import { apiRequest } from "../apiServices";
import { configuration } from "../config";

export default async function Signup(fname, lname, email, password) {

    try {

        const data = await apiRequest({
            url: "http://localhost:3000/api/signUp",
            params: {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ fname, lname, email, password }),
            },
        });

        if (data && data.token) {
            localStorage.setItem("userToken", data.token);
        }
        return data;
    }
    catch (error) {

        console.log("Sign Up failed:", error.message);
        throw error;
    }
}
