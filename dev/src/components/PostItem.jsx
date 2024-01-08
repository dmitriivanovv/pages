import React from 'react'
import MyButton from './UI/Button/MyButton'
import { useNavigate } from 'react-router-dom'

export default function PostItem(props) {
  const router = useNavigate();
  return (
    <div
      className="post_item"
    >
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className="post_bttns">
        <MyButton onClick={()=> router(`/posts/${props.post.id}`)} >
          Открыть
        </MyButton>
        <MyButton onClick={() => props.remove(props.post)} >
          Удалить
        </MyButton>
      </div>
    </div>
  )
}
