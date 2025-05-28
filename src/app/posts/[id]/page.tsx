export async function generateStaticParams() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return posts.map((post: { id: number }) => ({
        id: post.id.toString(),
    }));
}

interface PostProps {
    params: { id: string };
}

export default async function Post({ params }: PostProps) {
    const { id } = params;
    if (!id) {
        throw new Error('ID del post no proporcionado');
    }
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
        throw new Error('Error al cargar el post');
    }
    const data = await res.json();

    return (
        <div className="flex flex-col gap-4 items-center justify-center min-h-screen p-8 pb-20 border">
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p className="text-lg">{data.body}</p>
        </div>
    );
}