import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../Hooks/useFetching';
import PostService from '../API/PostSetvice';
import Loader from '../components/UI/Loader/Loader';
import CommentsList from '../components/CommentsList';
import PostBody from '../components/PostBody';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data);
  })
  const [fetchComments, isCommentsLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsPostById(id)
    setComments(response.data);
  })

  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [])

  return (
    <div className='post'>
      <PostBody
        isLoading={isLoading}
        params={params}
        post={post}
      />

      {isCommentsLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 120 }} >
          <Loader />
        </div>
        : <CommentsList
          comments={comments}
        />
      }
    </div>
  )
}

export default PostIdPage