"use client";
import Link from "next/link";
import Aluno from "./aluno";
import { useState } from "react";

export default function Register() {
    let [Alunoe, setAluno] = useState(false);
    let [Tutor, setTutor] = useState(false);
    const eventHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        let buttonType = event.currentTarget.textContent;
        let message = `You clicked the ${buttonType} button`;
        console.log(message);
        if (buttonType === "Aluno") {
            setAluno(true);
            setTutor(false);
            // Handle the Aluno button click
            return (
                <div>
                        <Aluno />
                </div>
            );
        }   else if (buttonType === "Tutor") {
            setTutor(true);
            setAluno(false);    
            // Handle the Tutor button click
            return (
                <div>
                    {/* Add Tutor component or logic here */}
                </div>
            );              
    };

}
    return (
        <div className="grid grid-rows-1 items-center justify-items-center min-h-fit   sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="flex flex-rows-2 items-center justify-items-center">
                <button  onClick={eventHandler} className="hover:cursor-pointer border-2 w-50 h-15 rounded-b-2xl mr-4">Aluno</button>
                <button  onClick={eventHandler} className="hover:cursor-pointer border-2 w-50 h-15 rounded-b-2xl">Tutor</button>
            </div>
            {Alunoe && <Aluno />}
            {Tutor && <div/>}


            <div>
               <Link href={"/"} className="pt-50 flex items-center gap-2 hover:underline hover:underline-offset-4">
                    Go to Home
                </Link>
            </div>
        </div>
    )
}