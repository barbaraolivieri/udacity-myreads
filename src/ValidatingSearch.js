import React, {Component} from 'react';
import Book from './Book';


/*
  Para validar a pesquisa, retornaremos books-grid normalmente
  para casos que não possuam erro (onde há livros correspondentes)
  e, caso não haja, uma mensagem que não foram encontrados livros
*/



class validatingSearch extends Component {


 verifyCategory = (libraryBooks, book) => {

    const categorySearch = libraryBooks.filter((categorySearch) => (
      categorySearch.id === book.id
    ))[0]

    if (categorySearch) {
          return categorySearch.shelf}
    else {return "none"}
      
  };

  


  render(){
   const {libraryBooks, showingBooks, updatingBooks} = this.props;
    if(!showingBooks.error){
        return (    
              <ol className="books-grid">
                    {
                        showingBooks.map((book) => (
                            <li key={ book.id }>
                                <Book
                                    id={ book.id }
                                    category={ this.verifyCategory(libraryBooks, book) }
                                    authors={ book.authors }
                                    title={ book.title }
                                    imageLinks={ book.imageLinks }
                                    updatingBooks={ updatingBooks }

                                />
                            </li>
                        ))
                    }
              </ol>
      )} else{
          return (  
               <div className="errorSearching">
               <center> Sorry, no correspending books </center>
               </div>
             )

        }


  }
}




export default validatingSearch;