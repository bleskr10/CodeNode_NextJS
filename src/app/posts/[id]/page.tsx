export async function generateStaticParams() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return posts.map((post: { id: number }) => ({
        id: post.id.toString(),
    }));
}

export default async function Post({ params }: { params: Promise<{ id: string; }> }) {
    const { id } = await params;
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    
    const data = await res.json();

    return (
        <div className="flex flex-col gap-4 items-center justify-center min-h-screen p-8 pb-20 border">
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p className="text-lg">{data.body}</p>
        </div>
    );
}