import React, { Component } from 'react';
import './NewRepository.css';
import { Form, FormGroup, Label, Input,
         Button } from 'reactstrap';
import axios from 'axios';

const api = {
    baseUrl: "https://api.github.com",
    client_id: "a43dc755fe5b04b0291e" ,
    client_secret: "62782a6a81b9ec243277e2da65f7442d90e7bf88"
    }

         
class NewRep extends Component{

    constructor(){
        super();
        this.state = {
          githubData: []
        }
      }
    
      componentDidMount() {
        axios
          .get(
            api.baseUrl +
             "/search/repositories?q=language%3AJava&sort=stars&page=1&client_id" +
             api.client_id +
             "&client_secret" +
             api.client_secret
        )
        .then((res) => {
          console.log("Infos da API", res);
          this.setState({githubData: res.data.items})
        })
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
                    <Button outline color="secondary" className='cancelBtn' >Cancel</Button>{' '}
                    <Button color="primary" className='addBtn'>Add</Button>{' '}
                </div>
            </div>
        )
    }
}

export default NewRep;