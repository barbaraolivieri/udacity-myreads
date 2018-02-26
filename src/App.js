import React from 'react'
import Categories from './Categories';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import './App.css';


/*
  Para importar os livros da API usamos promises, obtendo-os
  com . then e declarando que serão referenciados por 'books'
  Também é criado um método para atualização, verificando
  e atribuindo os dados necessários e fazendo a chamada de
  atualização da API novamente
  
*/



class App extends React.Component {

  state = {
    importingAPI: BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })

  } 

  /* A função da API para atualizar a categoria
  recebe qual livro e a categoria atual como
  argumentos, retornando uma promise com um JSON
  object

  */

  updatingBooks = (book, newCategory) => {
    const {books} = this.state;

    const bookId = books.findIndex((b) => {
      return b.id === book.id;
    });

    let categoryBooks = Object.assign([], books);

    /* se o id do livro for menor que 0 (falso), quer dizer
      que ele ainda não está disponível então teremos que adicionar
      um novo livro, colocando (push) o livro na categoria escolhida
      Caso ele já exista, apenas atribuimos a nova categoria a ele
    */
    if(bookId < 0){
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
    
    //apenas retornamos os livros caso eles existam

    if (books) {
      

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


      <Route path="/search" render={ () => (
        <SearchPage libraryBooks={books} updatingBooks={this.updatingBooks} />
        )

      } />

        
     </div>
      );
      } else{
        return null;
  
      }


      
  }


}



export default App;
