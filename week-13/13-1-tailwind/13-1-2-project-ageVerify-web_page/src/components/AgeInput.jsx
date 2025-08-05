import { useState } from "react";

export default function AgeInput({onSubmit}) {
    const [date, setDate] = useState("");

    const handleChange = (e) => setDate(e.target.value);

    const handleSubmit = (e) => {
        console.log(date);
        e.preventDefault();
        onSubmit(date);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
            <label htmlFor="birthday" className="mb-2 text-sm text-slate-200">
                Please confirm your birth year. This data will not be stored.
            </label>

            <input
                id="birthday"
                type="date"
                value={date}
                onChange={handleChange}
                className="px-4 py-2 rounded bg-slate-800 text-slate-100 focus:outline-none mb-6 w-64"
                required    
            />

            <button
                type="submit"
                className="w-64 py-2 rounded bg-teal-300 text-slate-900 font-semibold hover:bg-teal-400 transition"
            >
                Continue
            </button>
        </form>
    );
}