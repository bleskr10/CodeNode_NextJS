import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="flex items-center">
                <h1 className="text-xl font-bold">Mi Aplicación</h1>
            </div>
            <nav>
                <ul className="flex space-x-4">
                    <Link href="/"><li><a>Inicio</a></li></Link>
                    <Link href="about"><li><a>Sobre mí</a></li></Link>
                    <Link href="/contact"><li><a>Contacto</a></li></Link>
                </ul>
            </nav>
        </header>
    );
}