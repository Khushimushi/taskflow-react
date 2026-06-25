import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {

    //registration variables
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
   
    //error/success variables
    const [error, setError] = useState("");
    //const [success, setSuccess] = useState("");

    //navigation
    const navigate = useNavigate();

    //password validation
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);
    const hasLength = password.length >= 8;

    const requirements = [
        {
            text: "One uppercase letter",
            valid: hasUpperCase
        },{
            text: "One lowercase letter",
            valid: hasLowerCase
        },{
            text: "One number",
            valid: hasNumber
        },{
            text: "One special character",
            valid: hasSpecial
        },{
            text: "At least 8 characters",
            valid: hasLength
        } 
    ];


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setError(""); //Clears error if pass matches after the prev unmatch

        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        if (!emailRegex.test(email)) {
            setError("Please enter a valid Gmail address.");
            return;
        }

        //const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

        if (!hasLength || !hasLowerCase || !hasNumber || !hasSpecial || !hasUpperCase) {
            setError("Password does not meet all requirements.");
            return;
        }

        try {
            
            const response = await api.post(
                "/auth/register",
                { name, email, password }
            );

            localStorage.setItem(
               "token",
               response.data.token
            );

            setError("");
            navigate("/dashboard");

        } catch (error) {

            console.error(error);
            setError(error.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center bg-gray-100 justify-center">
            <form onSubmit={handleSubmit}
              className="p-8
                   bg-white
                   border
                   rounded-xl
                   shadow-lg
                   max-w-md w-full
                   flex 
                   flex-col 
                   space-y-2"
            >
                <h1 className="text-3xl font-bold text-center">Register</h1>
                <div className="mb-4 space-y-2">
                    <label className="block mb-1 font-medium">Name</label>
                    <input 
                       type="text"
                       placeholder="Name"
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                       className="border rounded-md w-full p-3
                                  focus:outline-none
                                  focus:ring-2
                                  focus:ring-blue-500"
                    />
                    <label className="block mb-1 font-medium">Email</label>
                    <input 
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border rounded-md w-full p-3
                                  focus:outline-none
                                  focus:ring-2
                                  focus:ring-blue-500"
                    />
                    <label className="block mb-1 font-medium">Password</label>
                    <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border rounded-md w-full p-3
                                  focus:outline-none
                                  focus:ring-2
                                  focus:ring-blue-500"
                    />
                    {password && (
                        <div className="mt-2 space-y-1">
                            <p className="text-sm font-semibold text-gray-700 mt-2">Password Requirements:</p>
                            {requirements.map((requirement, index) => {
                                return (
                                   <p key={index} 
                                   className={requirement.valid ? "text-green-600" : "text-gray-400"}>
                                      ● {requirement.text}
                                   </p>
                                );
                            })}
                        </div>
                    )}

                    <label className="block mb-1 font-medium">Confirm Password</label>
                    <input 
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="border rounded-md w-full p-3
                                  focus:outline-none
                                  focus:ring-2
                                  focus:ring-blue-500"
                    />

                    {error && (
                        <p className="text-red-500 text-sm mt-3">
                           {error}
                       </p>
                    )}
            
                    <button type="submit" className="rounded-md font-semibold hover:bg-blue-700 
                                                     bg-blue-600 text-white mt-1 p-3 w-full">
                        Register
                    </button>

                    <p className="text-center mt-2">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600 hover:underline">
                           Login
                        </Link>
                    </p>

                </div>
            </form>
        </div>
    );
}

export default Register;