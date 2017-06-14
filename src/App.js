import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Article from './Article'
import Aside from './Aside'
import OtherArticles from './OtherArticles'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="expanded row">
          <Article />
          <Aside />

          <OtherArticles />
        </main>

        <Footer />  
      </div>
    );
  }
}

export default App;
