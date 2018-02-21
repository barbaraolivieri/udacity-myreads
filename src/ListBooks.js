import React, {Component} from 'react';
import Book from './Book';

/*
	ListBooks será o componente responsável pela estrutura
	básica da estante que determina onde os livros ficarão
	passando as informações de cada livro de cada categoria.

	A estrutura html referente é o div com a classe 'bookshelf'
	Não possui estados associados, podendo ser escrita como função
	Receberá os nomes de cada categorias e livros da API

*/

function ListBooks( {books, updateBooks, categoryTitle} ){

return (

    <div className="bookshelf">
     <h2 className="bookshelf-title">{categoryTitle}</h2>
      <div className="bookshelf-books">
        
		 <ol className='books-grid'>
			{books.map((book) => (
				<li key={book.id} > 
					<Book title={book.title} authors={book.authors}
					imageLinks={book.imageLinks} category={book.shelf}
					updateBooks={updateBooks} id={book.id}
					 
					 />
				</li>
			) ) }

		</ol> 



      </div>
    </div>




		)


	}






export default ListBooks;