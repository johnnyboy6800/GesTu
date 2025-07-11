import Link from "next/link";

export default function Notas() {
    return (
        <div className="sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <h1 className="text-2xl font-bold">Notas do Aluno</h1>
                <p className="text-lg">Aqui estão suas notas recentes:</p>
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Disciplina</th>
                            <th className="border px-4 py-2">Nota</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">Matemática</td>
                            <td className="border px-4 py-2">9.5</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Português</td>
                            <td className="border px-4 py-2">8.0</td>
                        </tr>    
                        </tbody>               
                        </table>
            </main>

            <div className="mt-10 text-center">
                <p><Link href={'/'}>Go to home</Link></p>
            </div>

        </div>
    );
}