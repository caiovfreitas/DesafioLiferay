import React, { Component } from 'react';
import './Article.css';
import Dataset from '../../img/Dataset.png';
import {
    Card, CardBody,
  } from 'reactstrap';
import ApiItem from '../Service/ApiItem';
import axios from 'axios';


const api = {
    baseUrl: "https://api.github.com",
    client_id: "a43dc755fe5b04b0291e" ,
    client_secret: "62782a6a81b9ec243277e2da65f7442d90e7bf88"
    }

class Article extends Component{

    constructor(){
        super();
        this.state = {
          githubData: []
        };
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
          this.setState({ githubData: res.data.items });
        });
      }

    render(){
        const { githubData } = this.state;
        return(
            
            <div className='container'>

                <div className='empty'>
                    <img className='img' src={Dataset} alt=''/>
                    <p className='titles'>There is still nothing here</p>
                    <p className='subtitle'>Add some repositories by clicking add new repository</p>
                </div>

                    
                <div>
                    <Card>
                        <CardBody>
                        {githubData.map((nome) => (
                          <div>
                              <ApiItem item={nome.name}/>
                          </div>
                        )
                        )}
                        </CardBody>
                    </Card>
                </div>   
                              
            </div>

        )
    }
}

export default Article;