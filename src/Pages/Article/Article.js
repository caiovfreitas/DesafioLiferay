import React, { Component } from 'react';
import './Article.css';
import Dataset from '../../img/Dataset.png';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';



class Article extends Component{
    render(){

        return(
            
            <div className='container'>

                <div className='empty'>
                    <img className='img' src={Dataset} alt=''/>
                    <p className='titles'>There is still nothing here</p>
                    <p className='subtitle'>Add some repositories by clicking add new repository</p>
                </div>

    {/*                
                <div>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Card title</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </div>   
    */}                            
            </div>

        )
    }
}

export default Article;