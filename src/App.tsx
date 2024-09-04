import './App.css';
import BlogDisplay from './components/BlogDisplay';
import blogPosts from './blogs.json';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <BlogDisplay posts={blogPosts} />
    </div>
  );
}

export default App;
