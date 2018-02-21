import React, { Component } from 'react';
import ListBooks from './ListBooks';

/*	Esse componente tem como intuito listar as categorias
	existentes no MyReads, de forma a chamar ListBooks 
	para preenche-las adequadamente.
	Como essas categorias referem-se a estados, trata-se
	de uma classe que fará essa filtragem.

	Tratando do HTML, faremos referencia ao que está incluido
	no div de classe 'list-books'

*/

class Categories extends Component {


	render() {
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
          	<ListBooks/>
          	<ListBooks/>
          	<ListBooks/>
          </div>
         </div>
       </div>


	}


}


export default Categories;