import React from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

/*
	A página de pesquisa recberá os livros da API
	e o método para atualização de categorias,
	visto que as mudanças feitas nela devem
	continuar durante toda a aplicação.

	A princípio, o componente terá uma lista de livros vazia para ser exibida, uma vez
	que ainda não houve pesquisa, e uma query que será responsável por aparecer ou não
	os resultados buscados. Essa query começará em branco e mudará de acordo com o que
	for digitado, função exercida por um método específico para isso.


*/





class SearchPage extends React.Component{

	state = {
    	showSearchPage: false,
    	books: [],
    	query: ''
	}

    /**
     * Update the query to hit the api with, search the api with that query and set the state of the page
     * @param {string} query string request to hit api with
     */

	updateQuery = (query) => {

		let {booksAvailable} = this.props;

		this.setState({query: query});

		const trimmedQuery = query.trim();
		if(trimmedQuery === ''){
			return ;
		}

		BooksAPI.search(trimmedQuery, 10).then((response) => {
			if(response && response.length){
				const books = response.map((book) => {
					const listBooks = booksAvailable.find((listBooks) => listBooks.id === book.id);
					const shelf = listBooks ? listBooks.shelf : 'none';

					return{
						id: book.id,
						category: shelf,
						authors: book.authors,
						title: book.title
					}
				})
			this.setState({books});
			}
		})
	}



	render(){

		const {books} = this.state;
		const { updatingBooks} = this.props;

		return(
			<div className="PageCondition">
		{this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"
                onChange={ (event) => this.updateQuery(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {

              	books.map((book) =>(
              		<li key={book.id}>
              		<Book id={book.id} category={book.category}
              		authors={book.authors} title={book.title}
              		updatingBooks={updatingBooks} />


              		</li>

              		))



              }


              </ol>
            </div>
          </div>
        ) : (
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div> )}

			</div>)
		}
   





}





export default SearchPage;