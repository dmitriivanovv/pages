import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h1 style={{ color: "red", }} >
        Error
      </h1>
      <Link to='/posts'>
        Посты
      </Link>
    </div>
  )
}

export default Error