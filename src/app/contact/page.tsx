import styles from './page.module.css';

export default function Contact() {
    return (
        <div className="flex flex-col gap-4 items-center justify-center min-h-screen p-8 pb-20">
        <h1 className="text-2xl font-bold">Contacto</h1>
        <div>
            <form className={styles.contactForm}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input type="text" id="name" name="name" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                    <input type="email" id="email" name="email" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                    <textarea id="message" name="message" rows={4} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Enviar</button>
            </form>
        </div>
        </div>
    );
}