import React from 'react'

export default function Image({filtered}){
  return(
    <div className="grid-container">
    {filtered.map((image, ind) => {
      return ( 
        <div className="grid-item" key={ind}>
          <img className="myImg" style={{ width:'300px', height: "300px" }} key={image.id} src={image.download_url}/>
          <p>{image.author}</p>
        </div>
      ) 
    })}
    </div> 
  )
}