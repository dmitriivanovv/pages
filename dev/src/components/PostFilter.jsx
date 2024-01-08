import React from 'react';
import MySelect from "./UI/Select/MySelect";
import MyInput from "./UI/Input/MyInput";

const PostFilter = ({ filter, setFilter, limit, setLimit }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
        placeholder='Поиск'
      />
      <div style={{display:'flex', justifyContent: 'space-between'}}>
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
          defaultValue='Сортировка'
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' }
          ]}
        />
        <MySelect
          value={limit}
          onChange={value => setLimit(value)}
          defaultValue='Количество постов на странице'
          options={[
            { value: 5, name: '5' },
            { value: 10, name: '10' },
            { value: 25, name: '25' },
            { value: -1, name: 'Показать все' },
          ]}
        />
      </div>
    </div>
  )
}

export default PostFilter