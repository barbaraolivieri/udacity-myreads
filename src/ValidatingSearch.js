import React from 'react';
import Book from './Book';



function validatingSearch( {showingBooks, updatingBooks} ){
	


if(!showingBooks.error){
return (

            
      <ol className="books-grid">

            {
                showingBooks.map((book) => (
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




		)}
else{
return (

            
     <div className="errorSearching">
     <center>	Sorry, no correspending books </center>
     </div>
)

}




	}






export default validatingSearch;