import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import _  from 'lodash'
import { Container, Button, InputGroup, FormControl } from 'react-bootstrap'
import {  Image, ColorButtons } from '.'


export default function ImageList() {
    const [ imageList, setImageList ] = useState([])
    const [ userInput, setUserInput ] = useState('')
    
    const getImages = async () => {
      try {
        const { data } = await Axios.get( "https://picsum.photos/v2/list?limit=100")
        setImageList(_.sampleSize(data, 30)) 
        return data
      } catch ( error ) {
        throw error
      }
    }

    const filtered = _.filter(imageList, function(item) {
      const filteredByInput = item.author.toLowerCase().indexOf(userInput.toLowerCase()) > - 1    
      return filteredByInput
   })
  
    useEffect(() => {
      getImages()
    }, []);
  
  return (
    <React.Fragment>
      <Container>
        <InputGroup className="mb-3 form-group w-50">
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-small"
            placeholder = 'Search for images by author name'
            onChange = {(event) => setUserInput(event.target.value)} 
          />
        </InputGroup>
        <Button variant="outline-dark" onClick={() => {getImages()}} className="button-header">Different Images</Button>
        <ColorButtons />
      </Container>
      <Container>
        <Image filtered={filtered} />
      </Container>
    </React.Fragment>
  );
}