import React, { useState } from "react";
import { PostsHeader } from "./PostsHeader/PostsHeader";
import './BlogPage.css'
import { Post } from "./Post/Post";
import { POSTS_URL } from "../../utils/constans";
import { EditForm } from "./EditForm/EditForm";

export const Posts = ({
  title,
  blogPosts,
  setBlogPosts,
  isLoading,
  error,
  isLikedPosts = false
}) => {

  const likedPosts = blogPosts.filter((post) => post.liked)

  const likePost = (pos) => {
    const updatedPosts = [...blogPosts];
    updatedPosts[pos].liked = !updatedPosts[pos].liked;

    fetch(POSTS_URL + updatedPosts[pos].id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedPosts[pos])
    })
      .then((response) => response.json())
      .then((updatedPostFromServer) => {
        updatedPosts[pos] = updatedPostFromServer;
        setBlogPosts(updatedPosts);
      })
      .catch((error) => console.log(error))
  };

  const deletePost = (postId) => {
    const isDelete = window.confirm('Удалить пост?');

    if (isDelete) {
      fetch(POSTS_URL + postId, { method: 'DELETE' })
        .then(() => setBlogPosts(blogPosts.filter(post => post.id !== postId)))
        .catch((error) => console.log(error))
    };
  };

  const [selectedPost, setSelectedPost] = useState({});
  const [showEditForm, setShowEditForm] = useState(false);

  const selectPost = (post) => {
    setSelectedPost(post)
    setShowEditForm(true)
  };


  if (isLoading) return <h1>Получаем данные...</h1>

  if (error) return <h1>{error.message}</h1>

  return (
    <div className="postsWrapper">
      <PostsHeader
        title={title}
        isLikedPosts={isLikedPosts}
        setBlogPosts={setBlogPosts}
        blogPosts={blogPosts}
      />

      <section className="posts">
        {(isLikedPosts ? likedPosts : blogPosts).map((post, pos) => {
          return (
            <Post
              {...post}
              likePost={() => likePost(pos)}
              deletePost={() => deletePost(post.id)}
              selectPost={() => selectPost(post)} F
              key={post.id}
            />
          );
        })}
      </section>
      {showEditForm && (
        <EditForm
          setShowEditForm={setShowEditForm}
          selectedPost={selectedPost}
          setBlogPosts={setBlogPosts}
          blogPosts={blogPosts}
        />
      )}
    </div>
  )
}