import React from 'react'

function CommentItem({comment}) {
  return (
    <li className='commentItem' key={comment.id} style={{ maxWidth: '50%', marginLeft: '50px', marginTop: '15px' }}>
      <span>
        <strong>{comment.name}</strong>
        <br />
        {comment.email}
      </span>
      <p>
        {comment.body}
      </p>
    </li>
  )
}

export default CommentItem