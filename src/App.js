import React, { Component } from 'react';
import Headers from './Pages/Header/Headers';
import Article from './Pages/Article/Article';


class App extends Component {
  render(){    
      return (
        <div className='gbody'>
          <Headers />
          <Article />
        </div>
      );
  }
}

export default App;