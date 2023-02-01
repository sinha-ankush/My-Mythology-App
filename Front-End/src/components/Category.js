import React from 'react';
import CategoryCardItem from './CategoryCardItem';

function Category() {
  return (
    <div className='category_div'>
      <h5 style={{ 'padding': '5px 10px', 'marginBottom': '30px', color: 'black', 'fontWeight': 'bold', 'fontFamily': 'Inter' }}>Browse Categories</h5>
      <div className='category__container '>
        <CategoryCardItem
          img_path='myth.svg'
          text='Mythology Stories'
          heading='Mythology Stories'
          path='/mythological-stories'
        />
        <CategoryCardItem
          img_path='char.svg'
          text='Characters'
          heading='Characters'
          path='/characters'
        />
        <CategoryCardItem
          img_path='fest.svg'
          text='Festivals'
          heading='Festivals'
          path='/festivals'
        />
        <CategoryCardItem
          img_path='temp.svg'
          text='Temples'
          heading='Temples'
          path='/temples'
        />
      </div>

    </div>
  )
}

export default Category
