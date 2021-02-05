import React, { Component } from 'react';
import './NewRepository.css';
import { Form, FormGroup, Label, Input,
         Button } from 'reactstrap';
         
class NewRep extends Component{
    constructor(){
        super();
        this.state = {
            repoName: ""
        };
        this.onChange = (e) => {
            this.setState({repoName: e.target.value});
        };
        this.onSubmit = (evento) => {
            evento.preventDefault();
            console.log(this.state.repoName)
        }
    }

    render(){

        return(
            <div className='bodyNR'>
                <h1 className='title'>New Repository</h1>
                <Form>
                    <FormGroup>
                        <Label className='subtitlerep'>Repository</Label>
                        <Input name='repoName' 
                               type='text' 
                               bsSize="sm" 
                               value={this.state.repoName}
                               onChange={this.onChange}
                               />
                    </FormGroup>
                </Form>
                <div className='btnArea'>
                    <Button outline color="secondary" className='cancelBtn' >Cancel</Button>{' '}
                    <Button color="primary" className='addBtn' onClick={this.onSubmit} >Add</Button>{' '}
                </div>
            </div>
        )
    }
}

export default NewRep;