import { useState } from "react"

/*
// Ugly Way to do it
const DarkMode = () => {

    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={`h-screen ${darkMode ? "bg-black" : "bg-white"}`}>
            <button onClick={() => setDarkMode(!darkMode)} className="text-red-600">Toggle</button>
        </div>
    )
}*/

const DarkMode = () => {

    return (
        <div className="h-screen bg-white dark:bg-blue-600 text-black dark:text-white">
            <button onClick={() => {
                document.querySelector('html').classList.toggle("dark");
            }}>Toggle Theme</button>

            <div className="text-2xl dark:text-red-600 text-blue-600">
                Hi there
            </div>
        </div>

        // <div className="h-screen bg-white dark:bg-black dark:text-white">
        //     <h1>Hi There</h1>
        // </div>
    )
}

export default DarkMode;