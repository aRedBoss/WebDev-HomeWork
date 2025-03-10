import { useState } from "react";

export default function useLogin() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const login = async (object) => {
        setIsLoading(true);
        setError(null);
        const response = await fetch('/api/users/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(object),
        });
        const user = await response.json();

        if (!response.ok) {
            setError(user.error);
            setIsLoading(false);
            return;
        }

        localStorage.setItem("user", JSON.stringify(user));
        setIsLoading(false);
    };

    return { login, isLoading, error };
}