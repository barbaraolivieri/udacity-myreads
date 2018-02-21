import React, {Component} from 'react';
import Category from './Category'
import ListBooks from './ListBooks'

function Estante(props){


return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
          <div className="list-books-content">
            <div className="bookshelf">
             <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ListBooks  books={props.books} />
              </div>
            </div>

            <div className="bookshelf">
             <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                
              </div>
            </div>
     


          </div>
        
        </div>



		)


}






export default Estante;