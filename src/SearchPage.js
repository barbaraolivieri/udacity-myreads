import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import Book from './Book';




class SearchPage extends React.Component{

	state = {
    query: '',
    books: []
	}


  updateBooks = (query) => {
    const {libraryBooks} = this.props;

    this.setState({query: query.trim()});

    if(query === '') { return;}

    BooksAPI.search(query, 10).then((showing)=> {
      if(showing && showing.length){
        const books = showing.map((book) => {
          const list = libraryBooks.find((list) => list.id === book.id);
          const category = list ? list.category : 'none';

          return {
            id: book.id,
            category: category,
            authors: book.authors,
            title: book.title,
            imageLinks: book.imageLinks
          };


        });
        this.setState({books});
      }


    });

  };



	render(){

    const {books} = this.state;
    const {updatingBooks} = this.props;



    return(
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search" >Close</Link>

              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" onChange={ (event) => this.updateBooks(event.target.value)} placeholder="Search by title"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                    {
                        books.map((book) => (
                            <li key={ book.id }>
                                <Book
                                    id={ book.id }
                                    category={ book.category }
                                    authors={ book.authors }
                                    title={ book.title }
                                    imageLinks={ book.imageLinks }
                                    updatingBooks={ updatingBooks }
                                />
                            </li>
                        ))
                    }
              </ol>
            </div>
          </div>

      )


}

}





export default SearchPage;