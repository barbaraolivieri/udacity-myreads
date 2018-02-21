import React from 'react'
import './App.css'
import Categories from './Categories'
import * as BooksAPI from './BooksAPI';



class App extends React.Component {
  state = {
    importingAPI: BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  } 

  render(){

   const { books } = this.state;
    
    if (!books) {
      return null;
    }

    return (
      <div className="app">
      <Categories books={books} />
        
     </div>
      );
      
  }


}



export default App;
