import { useState } from "react";

export default function EmailForm() {
    const [email, setEmail] = useState("");
    const [verified, setVerify] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`You entered email: ${email}`)
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center mt-8"
        >
            <h1 className="text-white mb-8 text-2xl">
                Let's Get Started!
            </h1>
            <input
                type="email"
                value={email}
                placeholder="Email ID"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-64 px-4 py-2 rounded mb-4 bg-[#14223e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            <button
                type="submit"
                className="w-64 py-2 rounded bg-gray-400 text-white font-semibold transition-colors duration-200 hover:bg-blue-500"
            >
                Continue
            </button>
        </form>
    )
}