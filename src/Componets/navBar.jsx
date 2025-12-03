import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <header className="sticky top-0 bg-white z-50 shadow">
            <nav className="w-full p-4 flex items-center justify-between">
                <img src="/kevinicon.png" alt="Logo" className="h-10 w-auto" />

                <ul className="flex items-center gap-6">
                    <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
                    <li><Link to="/Projects" className="hover:text-blue-500">Projects</Link></li>
                    <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}
