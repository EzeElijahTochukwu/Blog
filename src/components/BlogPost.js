import React from 'react';
import { Link } from 'react-router-dom';
import './styles/BlogPost.css';

const BlogPost = ({ post }) => {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <Link to={`/post/${post.id}`} className="read-more">Read More</Link>
    </div>
  );
};

const BlogList = () => {
  const posts = [
    { id: 1, title: "Understanding React Hooks", excerpt: "Learn the basics of React Hooks and how they can simplify your components." },
    { id: 2, title: "CSS Grid vs. Flexbox", excerpt: "Which layout system should you use? A deep dive into CSS Grid and Flexbox." },
    { id: 3, title: "JavaScript ES6 Features", excerpt: "A look at some of the most useful features introduced in ES6." },
    { id: 4, title: "State Management in React", excerpt: "Exploring different ways to manage state in a React application." },
    { id: 5, title: "Accessibility Best Practices", excerpt: "How to make your website accessible to all users." },
  ];

  return (
    <div className="blog-list">
      {posts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
  
