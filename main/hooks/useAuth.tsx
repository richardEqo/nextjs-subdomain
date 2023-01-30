import { useEffect, useState } from "react";
import { AUTH_TOKEN } from "../constant";

export default function useAuth() {
    const [authToken, setAuthToken] = useState("");

    useEffect(() => {
        const auth = localStorage.getItem(AUTH_TOKEN)
        if (auth) {
            setAuthToken(auth)
        }
    }, [])

    return authToken;
}
