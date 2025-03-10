import React, { useState } from "react";
import useField from "../hooks/useField";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const username = useField("text");
    const password = useField("password");

    const { login, error, isLoading } = useLogin();
    const [formError, setFormError] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormError(null); // Reset error state

        // Simple client-side validation
        if (!username.value || !password.value) {
            setFormError("Please fill in all fields.");
            return;
        }

        try {
            await login({ email: username.value, password: password.value });

            if (!error) {
                console.log("Success");
                navigate("/");
            }
        } catch (err) {
            console.error(err);
            setFormError("An error occurred during login. Please try again.");
        }
    };

    return (
        <div className="create">
            <h2>Login</h2>
            <form onSubmit={handleFormSubmit}>
                <label>Username:</label>
                <input {...username} />
                <label>Password:</label>
                <input {...password} />

                {formError && <p style={{ color: "red" }}>{formError}</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}

                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
};

export default Login;