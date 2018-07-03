import React, { Component } from 'react';
import './mainStyle.css';
import {getBooks, getAuthors, getGenres} from "../actions";
import {connect} from "react-redux";


class BooksPage extends Component {


    componentWillMount() {
        this.props.getBooks();
        this.props.getAuthors();
        this.props.getGenres();

    };

    render() {

        const bookList = this.props.books.map(book =>

            <tr key={book._id}>
                <td> {book.title} </td>
                <td> {book.isbn} </td>
                <td> {book.genre.map( genre => <p key={genre._id}> {genre.name}</p>)} </td>
                <td> {book.author && `${book.author.first_name} ${book.author.family_name}`}</td>
                <td> <input  className='btn btn-info btn-sm ' type={'button'}   value={'Editar'}/> </td>
                <td> <input  className='btn btn-danger btn-sm ' type={'button'} value={'Borrar'}/> </td>
            </tr>);



        const optionList = this.props.authors.map(author =>
            <option key={author._id} > {author.first_name} {author.family_name} </option>);
        const optionGenreList = this.props.genres.map(genre =>
            <option key={genre._id} > {genre.name} </option>);

        return (
            <div className='menu2' >
                <h1 className={'title'}>{'Mi Biblioteca > Libros'}</h1>
                <span>
                <form className="form-authors" style={{marginLeft:200}}>
                    <p>Título:</p>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text"  placeholder="Introduce título"/>
                    </div>
                    <p>Género:</p>
                    <div className="form-group mx-sm-3 mb-2">
                        <select className="form-control" id="sel1">{optionGenreList}</select>
                    </div>
                    </form>
                    <form className="form-authors" style={{marginLeft:200}}>
                    <p>ISBN:</p>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text"  placeholder="Introduce ISBN"/>
                    </div>
                    <p>Autor:</p>
                    <div className="form-group mx-sm-3 mb-2">
                        <select className="form-control" id="sel1">{optionList}</select>
                    </div>
                    </form>
                    <div className="form-group">
                        <label style={{marginLeft:220}}>Resumen:</label>
                        <textarea className="resumen form-control" rows="1" ></textarea>
                    </div>

                    <button type="submit" className="boton-autores btn btn-success mb-2" >Crear</button>

                </span>
                <div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Título</th>
                            <th >ISBN</th>
                            <th >Género</th>
                            <th >Autor</th>
                            <th colSpan={2}>Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                            {bookList}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    console.log(state);
    return {
        books: state.books,
        authors: state.authors,
        genres: state.genres,
    };

};

const mapDispatchToProps = dispatch =>({
    getBooks : ()=> dispatch (getBooks()),
    getGenres : ()=> dispatch (getGenres()),
    getAuthors : ()=> dispatch (getAuthors()),

   // createAuthor: (first_name , family_name, date_of_birth, date_of_death)=> dispatch (createAuthor(first_name , family_name, date_of_birth, date_of_death)),
   // deleteAuthor: (id)=> dispatch (deleteAuthor(id)),
   // updateAuthor: (id, first_name , family_name, date_of_birth, date_of_death)=> dispatch (updateAuthor(id,first_name , family_name, date_of_birth, date_of_death))
});

export default connect (mapStateToProps, mapDispatchToProps) (BooksPage);