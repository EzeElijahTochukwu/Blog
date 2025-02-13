import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  const post = posts.find(post => post.id === parseInt(id));

  if (!post) return <div>Post not found</div>;

  return (
    <div className="post">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
