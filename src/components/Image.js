import React from 'react'
import '../App.css'

export default function Image({ filtered }){
  return (
    <div className="grid-container">
    {filtered.map((image, ind) => {
      return ( 
        <div className="grid-item" key={ind}>
          <img 
            className="reandom-image" 
            alt={image.author}
            key={image.id} 
            src={image.download_url}
          />
          <p>{image.author}</p>
        </div>
      ) 
    })}
    </div> 
  )
}