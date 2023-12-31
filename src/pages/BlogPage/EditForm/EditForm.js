import React, { useState } from "react";
import './EditForm.css'
import { ReactComponent as CloseIcon } from "../../../assets/images/close.svg";
import { POSTS_URL } from "../../../utils/constans";

export const EditForm = ({ setShowEditForm, selectedPost, setBlogPosts, blogPosts }) => {
  const [postTitle, setPostTitle] = useState(selectedPost?.title);
  const [postDesc, setPostDesc] = useState(selectedPost?.description);

  const handlePostTitleChange = (e) => {
    setPostTitle(e.target.value);
  }

  const handlePostDescChange = (e) => {
    setPostDesc(e.target.value);
  }

  const editPost = (e) => {
    e.preventDefault();

    const updatedPost = {
      ...selectedPost,
      title: postTitle,
      description: postDesc
    }

    fetch(POSTS_URL + selectedPost.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedPost)
    })
      .then(response => response.json())
      .then(updatedPostFromServer => {
        const updatedPosts = blogPosts.map((post) => {
          if (post.id === updatedPost.id) return updatedPostFromServer;
          return post
        })
        setBlogPosts(updatedPosts)
        setShowEditForm(false);
      })
      .catch(error => console.log(error))
  };

  return (
    <>
      <form className='editPostForm' onSubmit={editPost}>
        <button onClick={() => setShowEditForm(false)} className='hideBtn' >
          <CloseIcon />
        </button>
        <h2>Редактировани поста</h2>
        <div>
          <input
            className='editFormInput'
            type='text'
            name='postTitle'
            placeholder='Заголовок поста'
            value={postTitle}
            onChange={handlePostTitleChange}
            required
          />
        </div>
        <div>
          <textarea
            className='editFormInput'
            name='postDescription'
            placeholder='Описание поста'
            value={postDesc}
            onChange={handlePostDescChange}
            rows={8}
            required
          />
        </div>
        <div>
          <button className='editPostBtn' type='submit'>
            Сохранить и закрыть
          </button>
        </div>
      </form>
      <div onClick={() => setShowEditForm(false)} className="overlay"></div>
    </>
  )
}