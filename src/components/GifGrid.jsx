import React from 'react'
import useFecthGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

  const { data: images, loading } = useFecthGifs( category );

  return (
    <>
      <h3> { category } </h3>
      { loading && <p className='animate__animated animate__flash' >Cargando</p> }
      <div className='card-grid'>
        {
          images.map((img) => {
            return <GifGridItem { ...img } key={ img.id }/>
          })
        }
      </div>
    </>
  )
}

export default GifGrid;
