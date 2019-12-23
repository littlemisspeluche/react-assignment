import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import _  from 'lodash'
import './App.css';

export default function App() {
  const [ imageList, setImageList ] = useState([])
  const [userInput, setUserInput] = useState('')

  const getImages = async () => {
    try {
      const { data } = await Axios.get("https://picsum.photos/v2/list?limit=100")
      setImageList(_.sampleSize(data, 30)) 
      return data
    } catch (error) {
      // eslint-disable-next-line no-unused-expressions
      console.error
    } finally{
    }
  }

  const filtered = _.filter(imageList, function(item) {
    const filteredByInput = item.author.toLowerCase().indexOf(userInput.toLowerCase()) > -1    
    return filteredByInput
 })

  useEffect(() => {
    getImages()
  }, []);
  function myFunction(){
    const imageByClass = document.getElementsByClassName("myImg")
    for(var i = 0; i < imageByClass.length; i++) {
      imageByClass[i].style.filter = "grayscale(100%)";
    }
  }

  return (
    <div className="App">
      <div className="container">
        <button onClick={() => {getImages()}}>SEE DIFFERENT IMAGES</button>
        <input 
          type = 'search' 
          placeholder = 'search character'
          onChange = {(event) => setUserInput(event.target.value)} 
        />
        <button onClick={() => myFunction()}>GREYSCALE</button> 
         <div className="grid-container">
            {filtered.map((image, ind) => {
            return( 
            <div className="grid-item" key={ind}>
              <img className="myImg" style={{ width:'300px', height: "300px" }} key={image.id} src={image.download_url}/>
              <p>{image.author}</p>
            </div>
            )
            })}
          </div> 
        </div>
    </div>
  );
}