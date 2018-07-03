import React, { Component } from 'react';

class BooksLoanPage extends Component {

    render() {
        return (
            <div className='menu2' >
                <h1 className={'title'} >{'Gestión de la Biblioteca > Prestar'}</h1>
                <span>

                    <p style={{marginLeft:200 , marginTop:25}}>Libros reservados actualmente:</p>
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
                        </tbody>
                    </table>
                </div>
                <p style={{marginLeft:200 , marginTop: -25}}>Libro seleccionado:</p>
                    <span>
                <form className="form-authors" style={{marginLeft:200}}>
                    <p>Título:</p>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text" />
                    </div>
                    <p>Género:</p>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text"  />
                    </div>
                    </form>
                    <form className="form-authors" style={{marginLeft:200}}>
                    <p>ISBN:</p>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text"  />
                    </div>
                    <p>Autor:</p>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text"  />
                    </div>
                    </form>
                    </span>
                    <div style={{marginLeft:200}}>
                    <p>Fecha de devolución:</p>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text"  placeholder="dd/mm/aaaa"/>
                    </div>
                    </div>
                    <div className="form-group">
                        <label style={{marginLeft:220}}>Detalle:</label>
                        <textarea className="resumen form-control" rows="1" ></textarea>
                    </div>
                    <button type="submit" className="boton-autores btn btn-success mb-2" >Prestar</button>
                </span>
            </div>
        );
    }
}

export default BooksLoanPage;