import React from "react";
import { PostsHeader } from "./PostsHeader/PostsHeader";
import postImage from '../../../assets/images/postImage.jpg'
import './Posts.css'
import { Post } from "./Post/Post";

export const Posts = () => {
  return (
    <div className="postsWrapper">
      <PostsHeader />

      <section className="posts">
        <Post
          title='Post 1'
          description='It is a long established fact that a reader will be distracted by the readable content '
          image={postImage}
        />
        <Post 
         title='Post 2'
         description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '
         liked
        />
        <Post 
         title='Post 3'
         description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '
         image={postImage}
        />
        <Post 
         title='Post 4'
         description='It is a long established fact that a reader '
         liked
        />
        <Post 
         title='Post 5'
         description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '
         liked
         image={postImage}
        />
        <Post 
         title='Post 6'
         description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '
         liked
         image={postImage}
         />
      </section>
    </div>
  )
}