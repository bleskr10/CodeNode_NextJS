import PostList from "../components/post-list";

export default async function Posts() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    if (!res.ok) {
        throw new Error('Error al cargar los posts');
    }

    return (
        <div className="flex flex-col gap-4 items-center justify-center min-h-screen p-8 pb-20">
            <h1 className="text-2xl font-bold">Posts</h1>
            <PostList posts={data.slice(0,10)} />
        </div>
    );
}