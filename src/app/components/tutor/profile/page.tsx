
import Link from 'next/link';
import React from 'react';
export default function TutorProfilePage() {
    return (
        <>
        <div className="grid grid-rows-2 items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <img src="/blank-profile-picture-973460_640.webp" alt="Tutor Profile" className="w-100 h-80" />
            <main className="flex flex-col gap-[32px]  items-center sm:items-start">
            <h1 className="text-2xl font-bold">Perfil do Tutor</h1>
            <p className="text-lg">Aqui estão os detalhes do seu perfil:</p>
            <div className="flex flex-col gap-4">
                <p><strong>Nome:</strong> Tutor Exemplo</p>
                <p><strong>Email:</strong>
                </p>
                <p><strong>Especialização:</strong> Matemática</p>
                <p><strong>Data de Nascimento:</strong> 01/01/1990</p>
            </div>
            <div className="mt-10 text-center">
                <p><Link href={'/'}>Go to home</Link></p>
            </div>
        </main>
        </div> 
        </>
    )
}