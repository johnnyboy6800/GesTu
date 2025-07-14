import Link from "next/link";

export default function Notas() {
    return (
        <div className="sm:p-20 font-[family-name:var(--font-geist-sans)] justify-center items-center  grid grid-rows-2">
            <main className="flex flex-col gap-[32px]  row-start-2 items-center sm:items-start">
                <h1 className="text-2xl font-bold">Notas do Aluno</h1>
                <p className="text-lg">Aqui estão suas notas recentes:</p>
                <table className="rounded-sm min-w-150 border-collapse border-2   shadow-lg">
                    <thead className="bg-gray-200 " >
                        <tr className="border-b-2">
                            <th className=" px-4 py-2">Disciplina</th>
                            <th className="border px-4 py-2">Nota</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr className="border-b">
                            <td className="border px-4 py-2">Matemática</td>
                            <td className="border px-4 py-2">9.5</td>
                        </tr>
                        <tr className="border-b">
                            <td className="border px-4 py-2">Português</td>
                            <td className="border px-4 py-2">8.0</td>
                        </tr>    
                        </tbody>               
                        </table>
                        <p><Link href={'/'}>Go to home</Link></p>
            </main>

            <div className="mt-10 text-center">
                
            </div>

        </div>
    );
}