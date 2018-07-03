import React, { Component } from 'react';

class BooksReservePage extends Component {

    render() {
        return (
            <div className='menu2' >
                <h1 className={'title'} style={{marginLeft:200}}>{'Mi Biblioteca > Libros > Reservar'}</h1>
                <span>

                    <p style={{marginLeft:200 , marginTop:25}}>Libros disponibles actualmente:</p>
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
                        <tr>
                            <td>El Hobbit</td>
                            <td>123456789</td>
                            <td>Aventuras</td>
                            <td>J.R.R Tolkien</td>
                            <td colSpan={2}><input  className='btn btn-info btn-mb ' type={'button'} value={'Seleccionar'}/></td>
                        </tr>
                        <tr>
                            <td>El Hobbit</td>
                            <td>123456789</td>
                            <td>Aventuras</td>
                            <td>J.R.R Tolkien</td>
                            <td colSpan={2}><input  className='btn btn-info btn-mb ' type={'button'} value={'Seleccionar'}/></td>
                        </tr>
                        <tr>
                            <td>El Hobbit</td>
                            <td>123456789</td>
                            <td>Aventuras</td>
                            <td>J.R.R Tolkien</td>
                            <td colSpan={2}><input  className='btn btn-info btn-mb ' type={'button'} value={'Seleccionar'}/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <p style={{marginLeft:200 , marginTop:25}}>Libros disponibles actualmente:</p>
                    <div className="form-group">
                        <label style={{marginLeft:220}}>Resumen:</label>
                        <textarea className="resumen form-control" rows="1" ></textarea>
                    </div>
                    <button type="submit" className="boton-autores btn btn-success mb-2" >Reservar</button>
                </span>
            </div>
        );
    }
}

export default BooksReservePage;