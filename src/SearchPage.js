import React from 'react';
import ValidatingSearch from './ValidatingSearch';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';


class SearchPage extends React.Component{

	state = {
    query: '',
    books: []
	}

 updateBooks = (query) => {

  //Se não há nada digitado (ou tudo apagado), não há livros para serem mostrados

    if(!query) {
      this.setState({books: []});
    }else{
    BooksAPI.search(query).then(books => books ? this.setState({ books }) : []);}
    // Atualizamos a query sempre que ela for mudada
    this.setState({ query: query });
  };

	render(){

    const {query, books} = this.state;
    const {libraryBooks, updatingBooks} = this.props;
    let showingBooks = books;

    // Se não há nada digitado ou nenhum livro, não há livros para serem mostrados
    // Para realizar a validação com atribuição, showingBooks foi declarado como let,
    // por isso o uso de uma variável auxiliar

    if(!query || !books){
      showingBooks = []
    } 

    return(
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search" >Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text"
                value={this.state.query}
                 onChange={ (event) => this.updateBooks(event.target.value)} placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
             {/*Chamando componente para validar casos que possuam erros */}
              <ValidatingSearch libraryBooks={libraryBooks} showingBooks={showingBooks} 
              updatingBooks={updatingBooks} />
            </div>
          </div>
      )
    }
}





export default SearchPage;