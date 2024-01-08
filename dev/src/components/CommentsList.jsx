import React from 'react'
import CommentItem from './CommentItem'

function CommentsList({ comments }) {
  return (
    <div className='comments'>
      <h3 style={{ marginTop: '50px' }}>Комментарии:</h3>
      <ul className='commentList'>
        {comments.map(comment =>
          <CommentItem comment={comment} />
        )}
      </ul>
    </div>
  )
}

export default CommentsList