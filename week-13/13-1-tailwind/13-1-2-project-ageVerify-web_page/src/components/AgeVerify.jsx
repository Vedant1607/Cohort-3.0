import { useState } from "react";
import AgeInput from "./AgeInput";

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())){
        age--;
    }
    return age;
}

export default function AgeVerify() {
    const [verified, setVerified] = useState(false);

    const handleVerify = (date) => {
        const age = calculateAge(date);
        console.log(age);

        if (age >= 18){
            setVerified(true);
        } else {
            alert("You must be 18 years old to continue");
        }
    };

    if (verified) {
        return (
            <div className="text-center text-xl text-green-400 mt-8">
                Age Verified! Welcome to Webinar.gg!
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-white font-bold text-2xl mb-3">Verify Your Age</h1>
            <AgeInput onSubmit={handleVerify}/>
        </div>
    )
}