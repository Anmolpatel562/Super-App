import React from 'react'
import './selectedMovies.css';

export default function selectedMovies({movies}) {
  return (
    <div className='movieChip'>
      <p>{movies}</p>
    </div>
  )
}
