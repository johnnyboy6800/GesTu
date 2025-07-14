export default function Menu() {
    return (
        <div className="p-15 flex flex-col items-center justify-center text-center  ">
            <div className="bg-gray-800 rounded-2xl h-fit p-10 flex flex-col items-center justify-center space-y-4">
            <img src="/compressed_547fa5fb7ef937216eba214f0ddc9b9a.webp" alt="Logo" className="w-32 h-32 mb-8 rounded-full" />
            <p className="text-2xl text-white mb-8">Bem-vindo ao sistema!</p>
            <p className="text-2xl text-white mb-8">Selecione uma opção do menu abaixo:</p>
            <p className="text-2xl text-white mb-8">Menu Principal</p>
            <ul className="flex flex-col space-y-4 text-4xl text-white ">
                < li className=" h-15 rounded-2xl w-80 bg-blue-500"><a href="/">Home</a></ li >
                < li className=" h-15 rounded-2xl w-80 bg-blue-500"><a href="/components/aluno/notas">Notas</a></ li > 
                < li className=" h-15 rounded-2xl w-80 bg-blue-500"><a href="">Alunos</a ></ li >
                < li className=" h-15 rounded-2xl w-80 bg-blue-500"><a href="">Professores</a ></ li >
                < li className=" h-15 rounded-2xl w-80 bg-blue-500"><a href="">Disciplinas</a ></ li >
                < li className=" h-15 rounded-2xl w-80 bg-blue-500"><a href="">Turmas</a ></ li >
            </ul>
            </div>
            </div>
                )
}