import { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
}

interface BlogDisplayProps {
  posts: BlogPost[];
}

export default function BlogDisplay({ posts }: BlogDisplayProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleClose = () => {
    setSelectedPost(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg p-6 cursor-pointer"
            onClick={() => handlePostClick(post)}
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-4">
              By {post.author} on {post.date}
            </p>
            <p className="text-gray-700 truncate">{post.content}</p>
          </div>
        ))}
      </div>

      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl max-h-full">
            <div className="p-6 overflow-y-auto max-h-[80vh]">
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                {selectedPost.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                By {selectedPost.author} on {selectedPost.date}
              </p>
              <p className="text-gray-700">{selectedPost.content}</p>
            </div>
            <div className="text-right p-4">
              <button
                onClick={handleClose}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
