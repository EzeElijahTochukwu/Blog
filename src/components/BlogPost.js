import React from 'react';
import { Link } from 'react-router-dom';
import './styles/BlogPost.css';

const BlogPost = ({ post }) => {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <Link to={`/post/${post.id}`}>Read More</Link>
    </div>
  );
};

export default BlogPost;
