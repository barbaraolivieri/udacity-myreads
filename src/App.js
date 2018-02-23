import React from 'react'
import './App.css';
import { Route } from 'react-router-dom';
import Categories from './Categories';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI';

/*
  Para importar os livros da API usamos promises, obtendo-os
  com . then e declarando que serão referenciados por 'books'
  Também é criado um método para atualização, verificando
  e atribuindo os dados necessários e fazendo a chamada de
  atualização da API novamente
  
*/



class App extends React.Component {

  state = {
    screen: 'list',
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

      <Route path="/" exact render={() => (
     <Categories books={books}
      updatingBooks={this.updatingBooks} 
      onNavigate={ () => {
        this.setState({screen: 'search'})
      }
      }/>
        )} />

      <Route path="/search" component={SearchPage} />


        
     </div>
      );
      
  }


}



export default App;
