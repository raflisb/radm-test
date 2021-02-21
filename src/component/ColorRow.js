import React from "react";
import {Container,Row, Col} from 'react-bootstrap'

export default class ColorRow extends React.Component { 
    constructor(props) { 
        super(props)
        // define from prop in App.js
        let color = this.props.color
        let color_class = this.props.colorClass

        this.state = { 
            color : color, 
            colorItem : [],
            colorClass : color_class

        }
    }

    componentDidMount() { 
        this.renderRow(this.state.color)
    }

    renderRow= (color) => {
        let itemList=[]
        // foreach create a column with background color from the array 
       color.forEach((item,index)=>{
            itemList.push( <Col md="2"  key={index} style={{backgroundColor:item,height:"70px"}}></Col>)
        })

        // set the array to state 
        this.setState({
            colorItem: itemList
        })
    }


    render ()  { 
        return ( 
                <Row > 
                    {/* render state colorItem */}
                   {this.state.colorItem}
                </Row>
          
        )
    }

}