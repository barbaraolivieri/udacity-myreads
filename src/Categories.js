import React, { Component } from 'react';
import ListBooks from './ListBooks';
import { Link } from 'react-router-dom';

/*	Esse componente tem como intuito listar as categorias
	existentes no MyReads, de forma a chamar ListBooks 
	para preenche-las adequadamente.
	Como essas categorias referem-se a estados, trata-se
	de uma classe que fará essa filtragem.

	Tratando do HTML, faremos referencia ao que está incluido
	no div de classe 'list-books'

*/

class Categories extends Component {

/* 	Teremos que informar ao ListBooks o nome da categoria,
	os livros adequadamente filtrados para ela e o método
	para atualização
*/

	_filterAnalysis = (shelf) => {
		const {books} = this.props;
		return books.filter((b) => b.shelf === shelf )


	}


	render() {

	const {updatingBooks} = this.props;
  
	return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
          	<ListBooks categoryTitle="Currently Reading" books={ this._filterAnalysis('currentlyReading')} 
          	updatingBooks={updatingBooks} />
          	<ListBooks categoryTitle="Want to Read" books={ this._filterAnalysis('wantToRead')}
          	updatingBooks={updatingBooks} />
          	<ListBooks categoryTitle="Read" books={ this._filterAnalysis('read')}
          	updatingBooks={updatingBooks} />
          </div>
         </div>
            <div className="open-search">
              <Link to="/search" >Add a book</Link>
            </div>
       </div>
);

	}


}


export default Categories;