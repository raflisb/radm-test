import React, { useState,useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import ColorRow from './component/ColorRow'
import Filter from './component/Filter'
import Blue from './component/color/Blue'
import Grey from './component/color/Grey'
import Yellow from './component/color/Yellow'
import Red  from './component/color/Red'
import Brown  from './component/color/Brown'
import Green  from './component/color/Green'
import Purple from './component/color/Purple'
import Pink   from  './component/color/Pink'


import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
const [selectedColor, setColor] = useState('all')
 

// define the color list 
function listOfColor (color = "all") { 
  console.log(color)
  if (color == "all") { 
    return ( 
        <div >
        <ColorRow color={Blue} /> 
        <ColorRow color={Yellow} /> 
        <ColorRow color={Red} /> 
        <ColorRow color={Grey}  /> 
        <ColorRow color={Brown}  /> 
        <ColorRow color={Green}  /> 
        <ColorRow color={Purple}  /> 
        <ColorRow color={Pink}  />
        </div> 
        
    )
 } else { 
      return ( 
        <ColorRow color={selectedColor}/> 
      )
  }
}
// the function that used on filter component prop
function onSubmitFilter(color) { 
  
  if(color == "red") { 
    setColor(Red) 
  }
  if(color =="blue") {
    setColor(Blue)
  }
  if(color == "green") {
    setColor(Green)
  }
  if(color == "brown"){
    setColor(Brown)
  }
  if(color == "purple"){
    setColor(Purple)
  }
  if(color == "yellow"){
    setColor(Yellow)
  }
  if(color == "pink"){
    setColor(Pink)
  }
  if(color == "grey"){
    setColor(Grey)
  }
  if(color == 'all') { 
    setColor('all')
  }

}

  return (
    <div className="App" style={{marginTop:"40px", padding:"20px"}}> 
      <Container fluid>
        <Row md={3}> 
          <Col md={5} style={{textAlign:"left"}}> 
            <h3> Color List</h3> 
              {listOfColor(selectedColor)}
          </Col>
          <Col md={4} style={{textAlign:"left"}}> 
          <h3>Filter</h3>
          <Filter onSubmitFilter={onSubmitFilter} colorClass="All"></Filter>
          </Col>
        </Row>
       
      </Container>
    </div>
     
  );
}

export default App;
