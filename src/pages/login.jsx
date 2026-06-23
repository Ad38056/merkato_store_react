import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (!res.ok) return setError(data.error);
        localStorage.setItem("token", data.token);
        navigate("/");
    }
    return (
        <div className="max-w-md mx-auto mt-16 px-8">
            <h2 className="text-2xl font-bold text-[#1f3864] mb-6">Login</h2>
            {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-semibold text-[#1f3864] mb-1">Email</label>
                    <input type="email" value={email} onChange={(e) =>
                        setEmail(e.target.value)}
                        className="w-full border-2 border-[#dddddd] rounded px-3 py-2
focus:outline-none focus:border-[#1f3864]" />
                </div>
                <div>
                    <label className="block font-semibold text-[#1f3864] mb-
1">Password</label>
                    <input type="password" value={password} onChange={(e) =>
                        setPassword(e.target.value)}
                        className="w-full border-2 border-[#dddddd] rounded px-3 py-2
focus:outline-none focus:border-[#1f3864]" />
                </div>
                <button type="submit"
                    className="w-full bg-[#1f3864] hover:bg-[#e8b84b] hover:text-[#1f3864]
text-white font-semibold py-2.5 rounded transition-colors">
                    Login
                </button>
            </form>
        </div>
    );
}