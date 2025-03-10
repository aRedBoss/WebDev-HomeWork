import { useState } from "react";

export default function useSignup() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const signup = async (object) => {
        setIsLoading(true);
        setError(null);
        const response = await fetch('/api/users/signup', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(object),
        });
        const user = await response.json();

        if (!response.ok) {
            console.log(user.error);
            setError(user.error);
            setIsLoading(false);
            return error;
        }

        localStorage.setItem("user", JSON.stringify(user));
        setIsLoading(false);
    };

    return { signup, isLoading, error };
}