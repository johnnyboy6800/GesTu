export default function TutorRe() {
    return (
        <div className="grid grid-rows-2 items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] items-center sm:items-start">
                <h1 className="text-2xl font-bold">Cadastrar-se como Tutor</h1>
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Usuário"
                        className="border border-gray-300 rounded p-2"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="border border-gray-300 rounded p-2"
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        className="border border-gray-300 rounded p-2"
                    />
                    <input
                        type="text"
                        placeholder="Nome completo"
                        className="border border-gray-300 rounded p-2"
                    />
                    <input
                        type="date"
                        placeholder="Data de Nascimento"
                        className="border border-gray-300 rounded p-2"
                    />
                    <input
                        type="text"
                        placeholder="Especialização"
                        className="border border-gray-300 rounded p-2"
                    />
                    <button
                        type="submit"
                        className="rounded-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors"
                    >
                        Register
                    </button>
                </form>
            </main>
        </div>
    )
}