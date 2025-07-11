export default function Aluno() {
    return (
        <div className="sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <h1 className="text-2xl font-bold">Aluno Registration Page</h1>
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
                        Register
                    </button>
                </form>
            </main>
        </div>
    )
}