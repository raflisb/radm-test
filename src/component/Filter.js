import React from 'react'
import {Row, Col, Button, InputGroup, Form, Card} from 'react-bootstrap'

export default class Filter extends React.Component { 
    constructor(props) { 
        super(props)

        this.state ={ 
            colorClass : this.props.colorClass
        }
    }

    onSubmit= (e) => { 
        e.preventDefault() 
        this.props.onSubmitFilter(this.state.colorClass)

    }

    onColorChanged = (e) => { 
        this.setState({
            colorClass : e.target.value
        })

    }

    render () { 
        return ( 
            <Card> 
                <Card.Header></Card.Header>
                <Card.Body> 
                    <Form> 
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Color</Form.Label>
                            <Form.Control as="select" value={this.state.colorClass}
                                            onChange={this.onColorChanged}>
                                <option value="all">- All -</option>
                                <option value="red">- Red -</option>
                                <option value="blue">- Blue -</option>
                                <option value="green">- Green -</option>
                                <option value="pink">- Pink -</option>
                                <option value="grey">- Grey -</option>
                                <option value="yellow">- Yellow -</option>
                                <option value="purple">- Purple -</option>
                                <option value="brown">- Brown -</option>

                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>&nbsp;</Form.Label>
                            <Button type="submit" className="form-control" onClick={this.onSubmit}>
                                Filter
                            </Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}