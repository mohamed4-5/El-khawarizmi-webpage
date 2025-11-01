import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { validateEmail, validatePassword } from "../utils/validation";
 
function Login(){
    const {darkMode} = useTheme()
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);
        
        if (!isEmailValid) {
            setError("Please enter a valid email address");
            return;
        }
        
        if (!isPasswordValid) {
            setError("Password must be at least 6 characters long");
            return;
        }
        
        navigate('/');
    }
    return(
        <motion.div className={`min-h-screen text-black ${darkMode ? "bg-gray-900" : "bg-gray-100"}`} initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -50}} transition={{duration: 0.5}}>
        <div className="min-h-screen flex flex-col items-center justify-center">
            <form className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded shadow md:w-96 min-h-80 w-11/12 flex flex-col items-center justify-center`} onSubmit={handleSubmit}>
                <h2 className="text-xl text-blue-400 font-bold mb-4">Login</h2>
                {error && (
                    <div className="w-full mb-3 p-2 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
                        {error}
                    </div>
                )}
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="w-full mb-3 px-3 py-2 border rounded"></input>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required className="w-full mb-3 px-3 py-2 border rounded"></input>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
            </form>

        </div>
        </motion.div>
    )
}
export default Login;