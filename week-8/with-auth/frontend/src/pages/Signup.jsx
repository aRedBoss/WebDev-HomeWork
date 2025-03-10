import React, { useState } from "react";
import useField from "../hooks/useField";
import useSignup from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const name = useField("text");
    const username = useField("text");
    const email = useField("email");
    const password = useField("password");
    const phoneNumber = useField("text");
    const gender = useField("text");
    const dateOfBirth = useField("date");
    const street = useField("text");
    const city = useField("text");
    const state = useField("text");
    const zipCode = useField("text");

    const { signup, error, isLoading } = useSignup();
    const [formError, setFormError] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormError(null); // Reset error state

        // Simple client-side validation
        if (
            !name.value ||
            !username.value ||
            !email.value ||
            !password.value ||
            !phoneNumber.value ||
            !gender.value ||
            !dateOfBirth.value ||
            !street.value ||
            !city.value ||
            !state.value ||
            !zipCode.value
        ) {
            setFormError("Please fill in all fields.");
            return;
        }

        try {
            await signup({
                name: name.value,
                username: username.value,
                email: email.value,
                password: password.value,
                phone_number: phoneNumber.value,
                gender: gender.value,
                date_of_birth: dateOfBirth.value,
                role: "user", // Assuming the role is always 'user'
                address: {
                    street: street.value,
                    city: city.value,
                    state: state.value,
                    zipCode: zipCode.value,
                },
            });

            if (!error) {
                console.log("Success");
                navigate("/"); // Redirect after successful signup
            }
        } catch (err) {
            console.error(err);
            setFormError("An error occurred during signup. Please try again.");
        }
    };

    return (
        <div className="create">
            <h2>Sign Up</h2>
            <form onSubmit={handleFormSubmit}>
                <label>Name:</label>
                <input {...name} />
                <label>Username:</label>
                <input {...username} />
                <label>Email address:</label>
                <input {...email} />
                <label>Password:</label>
                <input {...password} />
                <label>Phone Number:</label>
                <input {...phoneNumber} />
                <label>Gender:</label>
                <input {...gender} />
                <label>Date of Birth:</label>
                <input {...dateOfBirth} />
                <label>Street:</label>
                <input {...street} />
                <label>City:</label>
                <input {...city} />
                <label>State:</label>
                <input {...state} />
                <label>Zip Code:</label>
                <input {...zipCode} />

                {formError && <p style={{ color: "red" }}>{formError}</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Signing Up..." : "Sign up"}
                </button>
            </form>
        </div>
    );
};

export default Signup;
