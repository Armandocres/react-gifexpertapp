import React from 'react'

const GifGridItem = ( { id, title, url } ) => {
  return (
    <div className='card animate__bounceIn'>
      <figure className='card__image'>
        <img src={ url } alt={ title } />
      </figure>
      <p>{ title }</p>
    </div>
  )
}

export default GifGridItem;
