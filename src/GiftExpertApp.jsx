import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const initialState = ['One Punch'];

const GiftExpertApp = () => {

  const [categories, setCategories] = useState(initialState);

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory setCategories={ setCategories } />
      <hr />
      <ol>
        { categories.map( category =>
          <GifGrid category={category} key={category} />
          ) }
      </ol>
    </>
  )
}

export default GiftExpertApp;