import React, { useState } from 'react'
import { ButtonGroup, ToggleButton, Container, Row } from 'react-bootstrap';

export default function ColorButtons() {
  const [ grayscale, setGrayscale ] = useState(false)

  const buttonStyle = grayscale ? 'grayscale(100%)' : 'grayscale(0%)'

  function convertImageStyle(){
    const imageByClass = document.getElementsByClassName("reandom-image")
    for(var i = 0; i < imageByClass.length; i++) {
      imageByClass[i].style.filter = buttonStyle
    }
  }

  return(
    <Container>       
      <Row className="w-50" >
        <ButtonGroup toggle className="mt-3">
          <ToggleButton 
            type="radio" 
            name="radio"  
            value="1"  
            variant="dark"
            style={{ margin: '0.3em' }}
            onClick={() =>  
              {
              convertImageStyle()
              setGrayscale(true) 
            }}  
          >
            Convert images into grayscale
          </ToggleButton>
          <ToggleButton 
            type="radio" 
            name="radio" 
            value="2"
            variant="outline-dark"
            style={{ margin: '0.3em' }} 
            onClick={() => 
            { 
              convertImageStyle()
              setGrayscale(false)
            }} 
          >
            Restore default 
          </ToggleButton>
        </ButtonGroup>
      </Row>
    </Container>
  )
}