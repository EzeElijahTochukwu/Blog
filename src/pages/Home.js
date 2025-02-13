import React from 'react';
import BlogPost from '../components/BlogPost';

const posts = [
  {
    id: 1,
    title: "First Blog Post",
    excerpt: "This is the first post in our blog...",
    content: "Full content of the first blog post..."
  },
  {
    id: 2,
    title: "React Basics",
    excerpt: "Learning React fundamentals...",
    content: "Detailed guide to React basics..."
  }
];

const Home = () => {
  return (
    <div className="home">
      <h1>Latest Posts</h1>
      {posts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
