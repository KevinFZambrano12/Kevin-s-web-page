import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-[var(--mh-dark)] border-b-4 border-[var(--mh-red)] shadow-xl">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">


                <div className="flex items-center gap-3">
                    <img src="/kevinicon.png" alt="logo"
                         className="w-10 h-10 rounded-lg border-2 border-[var(--mh-gold)]"/>
                    <h1 className="text-xl font-bold text-[var(--mh-gold)] tracking-wider">
                        Kevin Felipe Zambrano Guaca
                    </h1>
                </div>


                <ul className="hidden md:flex gap-8 text-[var(--mh-light)] font-semibold text-lg">
                    <li className="hover:text-[var(--mh-gold)] transition">
                        <Link to="/" className="hover:text-blue-500">Home</Link>
                    </li>
                    <li className="hover:text-[var(--mh-gold)] transition">
                        <Link to="/projects" className="hover:text-blue-500">Projects</Link>
                    </li>
                    <li className="hover:text-[var(--mh-gold)] transition">
                        <Link to="/contact" className="hover:text-blue-500">Contact</Link>
                    </li>
                </ul>

                <button
                    className="md:hidden text-[var(--mh-light)]"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={32} /> : <Menu size={32} />}
                </button>

                {/* MENÚ MÓVIL DESPLEGABLE */}
                {open && (
                    <div className="md:hidden bg-[var(--mh-dark)] border-t-2 border-[var(--mh-red)] p-4 space-y-4 text-center text-lg font-semibold">
                        <Link to="/" className="block text-[var(--mh-light)] hover:text-[var(--mh-gold)]">Home</Link>
                        <Link to="/projects" className="block text-[var(--mh-light)] hover:text-[var(--mh-gold)]">Projects</Link>
                        <Link to="/contact" className="block text-[var(--mh-light)] hover:text-[var(--mh-gold)]">Contact</Link>

                        {/* OPCIONALES */}
                        <a
                            href="https://github.com/KevinFZambrano12"
                            target="_blank"
                            className="block text-[var(--mh-blue)] hover:text-[var(--mh-teal)]"
                        >
                            GitHub
                        </a>
                    </div>
                )}
            </div>
        </nav>

    );
}
