import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import ValidatingSearch from './ValidatingSearch';





class SearchPage extends React.Component{

	state = {
    query: '',
    books: []
	}

  componentDidMount(){


  }


  validatingSearching = () => {
    return (<div>hello</div>);
  }







 updateBooks = (query) => {

 
    if(!query) {
      this.setState({books: []});
    }else{

    BooksAPI.search(query).then(books => books ? this.setState({ books }) : []);
}
    this.setState({ query: query });





    /*const {libraryBooks} = this.props;

    this.setState({query: query});

    if(query === '') { return null;}*/

  /*  BooksAPI.search(query).then((showing)=> {
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


    });*/

  };



	render(){


    const {query} = this.state
    let {books} = this.state;
    let showingBooks = books;

    if(!query || !books){
 showingBooks = []
    } 





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
                <input type="text"
                value={this.state.query}
                 onChange={ (event) => this.updateBooks(event.target.value)} placeholder="Search by title or author"/>
              

              </div>
            </div>
            <div className="search-books-results">
              <ValidatingSearch showingBooks={showingBooks} 
              updatingBooks={updatingBooks} />
            </div>
          </div>

      )


}

}





export default SearchPage;