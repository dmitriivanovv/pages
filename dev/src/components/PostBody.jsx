import React from 'react'
import Loader from './UI/Loader/Loader'

function PostBody({isLoading, params, post}) {
  return (
    <div className='post_body'>
      <h1> Пост #{params.id}</h1>
      {isLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 120 }} >
            <Loader />
          </div>
        : <div>
            <h2>{post.id}{post.title}</h2>
            <div>{post.body}</div>
          </div>
      }
    </div>
  )
}

export default PostBody