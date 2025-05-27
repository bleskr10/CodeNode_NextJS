import Link from "next/link";

export default function PostsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <header className="bg-blue-800 text-white p-4">
                <h2 className="text-xl font-semibold">Sección de Posts</h2>
                <nav className="mt-2">
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/posts" className="hover:underline">Todos los Posts</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline">Inicio</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="p-4">
                {children}
            </main>
        </div>
    );
}