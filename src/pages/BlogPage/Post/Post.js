import React from "react";

import imagePlaceholder from '../../../assets/images/placeholder.png'
import { ReactComponent as HeartIcon } from '../../../assets/images/heart.svg'
import { ReactComponent as TrashIcon } from '../../../assets/images/trash.svg'
import { ReactComponent as PenIcon } from '../../../assets/images/edit.svg'

import './Post.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Post = ({
  id,
  title,
  description,
  liked = false,
  thumbnail = imagePlaceholder,
  likePost,
  deletePost,
  selectPost
}) => {
  const customFilling = liked ? 'crimson' : 'black';


  const finalDescription = (
    <p>
      {
        description.length > 100 ? (
          <>
            {description.slice(0, 101)}...
            <Link to={`/blog/${id}`}>Подробнее</Link>
          </>
        ) : description
      }
    </p>
  )

  return (
    <div className="post">
      <img src={thumbnail} alt="post" />
      <h2>{title}</h2>
      <div>{finalDescription}</div>
      <div className="actions">
        <button onClick={likePost} className="likeBtn">
          <HeartIcon fill={customFilling} />
        </button>
        <button onClick={deletePost} className="deleteBtn">
          <TrashIcon />
        </button>
        <button onClick={selectPost} className="selectBtn">
          <PenIcon  />
        </button>
      </div>
    </div >
  )
}