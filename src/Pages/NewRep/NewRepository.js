import React, { Component } from 'react';
import './NewRepository.css';
import { Form, FormGroup, Label, Input,
         Button } from 'reactstrap';
class NewRep extends Component{
    constructor(props) {
        super(props);
        this.hideOp = this.hideOp.bind(this);
    }
    hideOp(){
        console.log('Clicado')
    }

    render(){
        return(
            <div className='bodyNR'>
                <h1 className='title'>New Repository</h1>
                <Form>
                    <FormGroup>
                        <Label className='subtitlerep'>Repository</Label>
                        <Input bsSize="sm"/>
                    </FormGroup>
                </Form>
                <div className='btnArea'>
                    <Button outline color="secondary" className='cancelBtn' onClick={this.hideOp}>Cancel</Button>{' '}
                    <Button color="primary" className='addBtn'>Add</Button>{' '}
                </div>
            </div>
        )
    }
}

export default NewRep;