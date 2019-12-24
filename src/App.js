import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import _  from 'lodash'
import { FormControl, Container, Row, ToggleButton, ButtonGroup, InputGroup, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

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
      throw error
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

  function convertToGrey(){
    const imageByClass = document.getElementsByClassName("myImg")
    for(var i = 0; i < imageByClass.length; i++) {
      imageByClass[i].style.filter = "grayscale(100%)";
    }
  }
  function convertToDefault(){
    const imageByClass = document.getElementsByClassName("myImg")
    for(var i = 0; i < imageByClass.length; i++) {
      imageByClass[i].style.filter = "grayscale(0)";
    }
  }

  return (
    <div className="App">
      <Container>
        <Row style={{ marginTop: '2em',  }}>
          <InputGroup className="mb-3 form-group w-50">
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-small"
              placeholder = 'Search for images by author name'
              onChange = {(event) => setUserInput(event.target.value)} 
            />
          </InputGroup>
        </Row>
        <Row className="w-50" >
          <Button variant="outline-dark" onClick={() => {getImages()}} style={{ margin: '0.3em' }}>Different Images</Button>
        </Row>
        <Row className="w-50" >
          <ButtonGroup toggle className="mt-3">
            <ToggleButton type="radio" name="radio"  value="1"  variant="dark" onClick={() => convertToGrey()} style={{ margin: '0.3em',  }}>
                Convert images into grayscale
            </ToggleButton>
            <ToggleButton type="radio" name="radio" value="2" variant="outline-dark" onClick={() => convertToDefault()} style={{ margin: '0.3em',  }}>
              Restore default 
            </ToggleButton>
          </ButtonGroup>
        </Row>
      </Container>
      <Container>
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
      </Container>
    </div>
  );
}