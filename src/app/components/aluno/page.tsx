import Link from "next/link";

export default function HomeAluno() {
    return (
        <div className="grid grid-rows-1 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div><p>Olá aluno 'aluno'</p></div>
            <div>
                <p className="text-2xl font-bold">Bem-vindo ao portal do aluno</p>
                <p className="text-lg">Aqui você pode acessar suas aulas, materiais e muito mais.</p>
                <p className="text-lg">Use o menu para navegar pelas opções disponíveis.</p>
            </div>
            <div>
                <ul className=" list-item pl-5 justify-center items-center text-lg font-semibold">
                    <li className="border-2 rounded-2xl text-4xl " ><Link  href="/components/aluno/notas/">Notas</Link></li>
                    <li className="border-2 rounded-2xl text-4xl " ><Link href="/components/aluno/perfil">Perfil</Link></li >
                    <li className="border-2 rounded-2xl text-4xl " ><Link href="/components/aluno/suporte">Suporte</Link></li >
                    <li className="border-2 rounded-2xl text-4xl " ><Link href="/components/aluno/sair">Sair</Link></li >
                </ul>
            </div>
            <div>
                <p className="text-sm pt-50 text-gray-500">
                    Se precisar de ajuda, entre em contato com o suporte.
                </p>
            </div>      
        </div>
    );
}