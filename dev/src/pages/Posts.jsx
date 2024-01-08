import React, { useEffect, useState } from "react";
import PostService from '../API/PostSetvice'
import { useFetching } from "../Hooks/useFetching";
import { usePosts } from "../Hooks/usePosts";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButton from "../components/UI/Button/MyButton";
import Loader from "../components/UI/Loader/Loader";
import MyModal from "../components/UI/Modal/MyModal";
import Pagination from "../components/UI/Pagination/Pagination";
import { getPageCount } from "../utils/Pages";

function Posts() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);


  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


  const [fetchPosts, ispostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit])



  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const RemovePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page)
  }

  return (
    <div className="App">

      <MyButton onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      {/* <hr style={{ margin: '15px 0' }} /> */}

      <PostFilter
        filter={filter}
        setFilter={setFilter}
        limit ={limit}
        setLimit = {setLimit}
      />

      {postError &&
        <h1 style={{ textAlign: 'center', marginTop: 30 }}>Произошла ошибка {postError}</h1>
      }
      {ispostsLoading
        ?
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 120 }} >
          <Loader />
        </div>
        :
        <div>
          <PostList
            remove={RemovePost}
            posts={sortedAndSearchedPosts}
            title='Посты про JS'
          />
          <Pagination
            page={page}
            changePage={changePage}
            totalPages={totalPages}
          />
        </div>
      }



      <MyModal
        visible={modal}
        setVisible={setModal}
      >
        <PostForm
          create={createPost}
        />
      </MyModal>

    </div>
  );
}

export default Posts;
 