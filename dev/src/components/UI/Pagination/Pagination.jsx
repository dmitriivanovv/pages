import React from 'react'
// import { getPagesArray } from '../../../utils/Pages';
import { usePagination } from '../../../Hooks/usePagination'

const Pagination = ({totalPages, page, changePage}) => {
  let pagesArray = usePagination(totalPages);
  // let pagesArray = getPagesArray(totalPages)
  return (
    <div className="page__wrapper" >
      {pagesArray.map(p =>
        <span
          onClick={() => changePage(p)}
          className={p === page ? 'page page__current' : 'page'}
          key={p}
        >
          {p}
        </span>
      )}
    </div>
  )
}

export default Pagination;