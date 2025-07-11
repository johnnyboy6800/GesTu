export default function NavBar() {
    return (
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <h1 className="text-xl font-bold">Escola App</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/components/auth/register" className="hover:underline">Register</a></li>
                    <li><a href="/components/Login" className="hover:underline">Login</a></li>
                    <li><a href="/notas" className="hover:underline">Notas</a></li>
                </ul>
            </nav>
        </div>
    );
}