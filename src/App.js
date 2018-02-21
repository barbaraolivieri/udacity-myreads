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

  updatingBooks = (book, newCategory) => {
    const {books} = this.state;

    const bookId = books.findIndex((key) => {
      return key.id === book.id;
    });

    let categoryBooks = Object.assign([], books);

    if(bookId === -1){
      const newBook = Object.assign({}, book);
      newBook.shelf = newCategory;
      categoryBooks.push(newBook);
    }else{
    categoryBooks[bookId] = Object.assign({}, categoryBooks[bookId]);
    categoryBooks[bookId].shelf = newCategory;
}
    BooksAPI.update(book, newCategory).then(
      this.setState({books: categoryBooks}));


  };



  render(){

   const { books } = this.state;
    
    if (!books) {
      return null;
    }

    return (
      <div className="app">
      <Categories books={books}
      updatingBooks={this.updatingBooks} />
        
     </div>
      );
      
  }


}



export default App;
