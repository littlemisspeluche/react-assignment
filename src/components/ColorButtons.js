import React from 'react'
import { ButtonGroup, ToggleButton, Container, Row } from 'react-bootstrap';


export default function ColorButtons() {

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
  return(
      <Container>       
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
  )
}