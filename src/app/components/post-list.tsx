import Link from "next/link";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function PostList({posts} : {posts : Post[]} ) {
    return (
        <div>
            {posts.map((post) => (
                <div className="border rounded-lg p-4 shadow-md w-full max-w-2xl mb-5" key={post.id}>
                <h2>
                    <Link href={`/post/${post.id}`} className="hover:underline ml-2">{post.title}</Link>
                </h2>
                <p className="mt-2 text-gray-700">{post.body}</p>
                </div>
            ))}
        </div>
    );
}