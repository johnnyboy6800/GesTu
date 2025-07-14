import Link from "next/link";

export default function Aluno() { 
    let userA:String = "aluno";
    let userT:String = "tutor";
    var titulo = (user:String) => {
        return <>
            <h1 className="text-2xl font-bold">Realize o login como {user}</h1>
        </>
    }
    return (
        <div className="grid grid-rows-2 items-center justify-items-center min-h-screen   sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px]  items-center sm:items-start">
            {titulo(userA)}
            <form className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="Username"
                className="border border-gray-300 rounded p-2"
            />
            <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded p-2"
            />
            
            <button
                type="submit"
                className="rounded-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors"
            >
                Login
            </button>
            </form>
            <p className="text-sm text-gray-500">
            Não possui uma conta?<Link href={"/components/auth/register/"}>Registre-se</Link>
            </p>
            <p className="text-sm text-gray-500">
            Esqueci minha senha
            </p>
            <p className="text-sm text-gray-500">
              Entre como  <Link href={"/components/auth/tutor_auth"}>tutor</Link>
            </p>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center pt-30">
            <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/"
            >
            Go to Home
            </a>
        </footer>
        </div>
    )
}