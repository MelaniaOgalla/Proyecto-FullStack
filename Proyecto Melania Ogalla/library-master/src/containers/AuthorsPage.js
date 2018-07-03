import React, { Component } from 'react';
import {getAuthors, createAuthor, deleteAuthor, updateAuthor} from "../actions";
import {connect} from "react-redux";
import  moment  from 'moment';
import './mainStyle.css'

class AuthorsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

            authorName: '',
            authorFamilyName: '',
            authorDateOfBirth: '',
            authorDateOfDeath: '',
            author_Id: '',
            isEditing: false

        };

        this.handleCrearAutor = this.handleCrearAutor.bind(this);
        this.handleIntroducirAutor = this.handleIntroducirAutor.bind(this);
        this.handleIntroducirApellido = this.handleIntroducirApellido.bind(this);
        this.handleIntroducirFechaNacimiento = this.handleIntroducirFechaNacimiento.bind(this);
        this.handleIntroducirFechaDefuncion = this.handleIntroducirFechaDefuncion.bind(this);
        this.handleBorrarAutor = this.handleBorrarAutor.bind(this);
        this.handleEditarAutor = this.handleEditarAutor.bind(this);
        this.handleCopiarAutor = this.handleCopiarAutor.bind(this);
        this.handleCancelarAutor = this.handleCancelarAutor.bind(this)


    };

    componentWillMount() {
        this.props.getAuthors();

    };


    render() {

        const SaveButton = this.state.isEditing ? (
            <div><input style={{marginLeft: 450}} className='btn btn-info btn-sm ' type={'button'} value={'Guardar'}
                        onClick={this.handleEditarAutor.bind(this, this.state.author_Id)}/>

                <input style={{marginLeft: 20}} className='btn btn-danger btn-sm ' type={'button'} value={'Cancelar'}
                       onClick={this.handleCancelarAutor}/>
            </div>
        ) : (<input style={{marginLeft: 450}} type="button" className="btn btn-success mb-2" value="Crear"
                    onClick={this.handleCrearAutor}/>);

        const SaveInputName = (
            <input
                type="text"
                value={this.state.authorName}
                onChange={this.handleIntroducirAutor}
                placeholder="Introduce autor"
            />);

        const SaveInputFamilyName = (
            <input
                type="text"
                value={this.state.authorFamilyName}
                onChange={this.handleIntroducirApellido}
                placeholder="Introduce apellido autor"
            />);
        const SaveInputDateOfBirth = (
            <input
                type="text"
                value={this.state.authorDateOfBirth}
                onChange={this.handleIntroducirFechaNacimiento}
                placeholder="aaaa-mm-dd"
            />);
        const SaveInputDateOfDeath = (
            <input
                type="text"
                value={this.state.authorDateOfDeath}
                onChange={this.handleIntroducirFechaDefuncion}
                placeholder="aaaa-mm-dd"
            />);

        const authorList = this.props.authors.map(author =>
            <tr key={author._id}>
                <td> {author.first_name} </td>
                <td> {author.family_name} </td>
                <td> {moment(author.date_of_birth).format('L')} </td>
                <td> {moment(author.date_of_death).format('L')} </td>
                <td><input className='btn btn-info btn-sm ' type={'button'} value={'Editar'}
                           onClick={this.handleCopiarAutor.bind(this, author._id)}/></td>
                <td><input className='btn btn-danger btn-sm ' type={'button'} value={'Borrar'}
                           onClick={this.handleBorrarAutor.bind(this, author._id)}/></td>
            </tr>);

        return (
            <div className='menu2'>
                <h1 className={'title'}>{'Mi Biblioteca > Autores'}</h1>
                <span>
                <form className="form-authors">
                    <p>Nombre:</p>
                    <div className="form-group mx-sm-3 mb-2">
                        {SaveInputName}
                    </div>
                    <p>Fecha de Nacimiento:</p>
                    <div className="form-group mx-sm-3 mb-2">
                        {SaveInputDateOfBirth}
                    </div>
                    </form>
                    <form className="form-authors">
                    <p>Apellidos:</p>
                    <div className="form-group mx-sm-3 mb-2">
                        {SaveInputFamilyName}
                    </div>
                    <p>Fecha de Defunción:</p>
                    <div className="form-group mx-sm-3 mb-2">
                        {SaveInputDateOfDeath}
                    </div>
                    </form>
                    <div>
                    {SaveButton}
                    </div>
                </span>
                <div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Fecha Nacimiento</th>
                            <th>Fecha Defunción</th>
                            <th colSpan={2}>Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {authorList}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    handleCrearAutor() {
        this.setState({
            authorName: '',
            authorFamilyName: '',
            authorDateOfBirth: '',
            authorDateOfDeath: '',
        });
        this.props.createAuthor(this.state.authorName, this.state.authorFamilyName, this.state.authorDateOfBirth, this.state.authorDateOfDeath);
    };

    handleIntroducirAutor(e) {

        this.setState({
            authorName: e.target.value
        })
    };

    handleIntroducirApellido(e) {
        this.setState({
            authorFamilyName: e.target.value

        })
    };

    handleIntroducirFechaNacimiento(e) {
        this.setState({
            authorDateOfBirth: e.target.value

        })
    };

    handleIntroducirFechaDefuncion(e) {
        this.setState({
            authorDateOfDeath: e.target.value

        })
    };

    handleBorrarAutor(id) {
        this.setState({
            isEditing: false,
            authorName: '',
            authorFamilyName: '',
            authorDateOfBirth: '',
            authorDateOfDeath: ''
        });
        this.props.deleteAuthor(id);
    };

    handleEditarAutor(author_Id) {
        this.setState({
            isEditing:!this.state.isEditing,
            authorName:'',
            authorFamilyName: '',
            authorDateOfBirth:'',
            authorDateOfDeath:''
        });

        this.props.updateAuthor(author_Id, this.state.authorName, this.state.authorFamilyName, this.state.authorDateOfBirth, this.state.authorDateOfDeath);
    };

    handleCancelarAutor() {
        this.setState({
            isEditing: false,
            authorName:'',
            authorFamilyName: '',
            authorDateOfBirth:'',
            authorDateOfDeath:''
        });
    };


    handleCopiarAutor(author_Id) {
        const authorName = this.props.authors.filter(author => author._id == author_Id)[0].first_name;
        this.setState({
            author_Id,
            authorName,
            isEditing: !this.state.isEditing
        });
        const authorFamilyName = this.props.authors.filter(author => author._id == author_Id)[0].family_name;
        this.setState({
            author_Id,
            authorFamilyName,
            isEditing: !this.state.isEditing
        });
        const authorDateOfBirth = this.props.authors.filter(author => author._id == author_Id)[0].date_of_birth;
        this.setState({
            author_Id,
            authorDateOfBirth,
            isEditing: !this.state.isEditing
        });
        const authorDateOfDeath = this.props.authors.filter(author => author._id == author_Id)[0].date_of_death;
        this.setState({
            author_Id,
            authorDateOfDeath,
            isEditing: !this.state.isEditing
        });
    }
}



const mapStateToProps = state => {
    return {
        authors: state.authors
    };
};

const mapDispatchToProps = dispatch =>({
    getAuthors : (authors)=> dispatch (getAuthors(authors)),
    createAuthor: (first_name , family_name, date_of_birth, date_of_death)=> dispatch (createAuthor(first_name , family_name, date_of_birth, date_of_death)),
    deleteAuthor: (id)=> dispatch (deleteAuthor(id)),
    updateAuthor: (id, first_name , family_name, date_of_birth, date_of_death)=> dispatch (updateAuthor(id,first_name , family_name, date_of_birth, date_of_death))
});

export default connect (mapStateToProps, mapDispatchToProps) (AuthorsPage);