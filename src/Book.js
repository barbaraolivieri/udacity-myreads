import React, { Component } from 'react';

/*	Book: componente mais simples da estrutura
	Possui uma mudança de estado referente as
	categorias Lendo, Lido e Quero Ler
	Logo, haverá um state 'category' a ser
	responsável por essas mudanças, a princípio
	setado como nenhuma categoria.

*/

class Book extends Component {
  state = {
    category: 'none'
  }

  // Função para avaliar a mudança de categoria

  changeCategory(value){
  	const { updateBooks } = this.props;
  	updateBooks(this.props,value); // propriedade de atualizar livros receberá value

  }

  render() {

  	//	As propriedades de cada livro presentes na API são: título, autor e capa

  	const {title, authors, imageLinks} = this.props;
  	const {category} = this.state;

  	//	Capa precisa de tratamento especial para ser visualizada

  	return(

 /*     O componente do livro deverá retornar a estrutura básica
		html presente no arquivo de início, especificamente na
		div 'book', importando os livros presentes na API 
*/

		// O valor do select dependerá do estado da categoria

		<div className="book">
			<div className="book-top">
				<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("{  }")` }} ></div> 
				    <div className="book-shelf-changer">


	                  <select value={category} onChange{}>		
	                    <option value="none" disabled>Move to...</option>
	                    <option value="currentlyReading">Currently Reading</option>
	                    <option value="wantToRead">Want to Read</option>
	                    <option value="read">Read</option>
	                    <option   value="none">None</option>
	                  </select>
	                </div>
			</div>
			<div className="book-title" >{title} </div>
			<div className="book-authors" >{authors} </div>
		</div>		


  	);


  }


}

export default Book;