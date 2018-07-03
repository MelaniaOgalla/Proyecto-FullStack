import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBooks, getAuthors, getGenres} from '../actions';

import './index.css';






class HomePage extends Component {

    componentWillMount(){
        this.props.getGenres();
        this.props.getBooks();
        this.props.getAuthors();

    }

  render() {
    return (


        <div className='menu'  >

      <div >
          <h1>{'Mi Biblioteca'}</h1>
      </div>
      <div >
          <img src='https://i0.wp.com/www.unedsevilla.es/wp-content/uploads/bibliotecaexemp-b.jpg?fit=980%2C440' alt='' className="responsive"/>
      </div>

            <div className='boton-flex'>
                <Link to='/generos'> <input  className='boton btn btn-outline-primary btn-lg ' type={'button'} value={`${this.props.genres.length}${' Géneros'}`} /></Link>
                <Link to='/autores'> <input  className='boton btn btn-outline-primary btn-lg ' type={'button'} value={`${this.props.authors.length}${' Autores'}`} /></Link>
                <Link to='/libros'>  <input className='boton btn btn-outline-primary btn-lg ' type={'button'} value={`${this.props.books.length}${' Libros'}`} /></Link>
            </div>
            </div>
    );
  }
}


const mapStateToProps = state => {
    return {
        authors: state.authors,
        books: state.books,
        genres: state.genres
    };
};

const mapDispatchToProps = dispatch =>({
    getBooks : () => dispatch (getBooks()),
    getGenres : ()=> dispatch (getGenres()),
    getAuthors : ()=> dispatch (getAuthors()),
});

export default connect (mapStateToProps, mapDispatchToProps) (HomePage);
