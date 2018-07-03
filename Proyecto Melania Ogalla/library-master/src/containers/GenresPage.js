import React, { Component } from 'react';
import './mainStyle.css'
import {getGenres, createGenre, deleteGenre, updateGenre} from "../actions";
import {connect} from "react-redux";


class GenresPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genreName: '',
            genre_Id: '',
            isEditing: false
        };

    this.handleCrearGenero = this.handleCrearGenero.bind(this);
    this.handleIntroducirGenero = this.handleIntroducirGenero.bind(this);
    this.handleBorrarGenero = this.handleBorrarGenero.bind(this);
    this.handleEditarGenero = this.handleEditarGenero.bind(this);
    this.handleCopiarGenero = this.handleCopiarGenero.bind(this);
    this.handleCancelarGenero = this.handleCancelarGenero.bind(this)


    };

    componentWillMount() {
        this.props.getGenres();

    };


    render() {

        const SaveButton = this.state.isEditing ? (
           <div> <input className='btn btn-info btn-sm ' type={'button'} value={'Guardar'}
                        onClick={this.handleEditarGenero.bind(this, this.state.genre_Id)} />

               <input style={{marginLeft: 20}} className='btn btn-danger btn-sm ' type={'button'} value={'Cancelar'}
                      onClick={this.handleCancelarGenero} />
           </div>
        ):(<input  type="button" className="btn btn-success mb-2" value="Crear"
                  onClick={this.handleCrearGenero}/> );

        const SaveInput = (
            <input
                type="text"
                value={this.state.genreName}
                onChange={this.handleIntroducirGenero}
                placeholder="Introduce género"
            />
        );

        const genreList = this.props.genres.map(genre =>
            <tr key={genre._id}>
                <td> {genre.name} </td>
                <td><input className='btn btn-info btn-sm ' type={'button'} value={'Editar'}
                           onClick={this.handleCopiarGenero.bind(this, genre._id)} /></td>
                <td><input className='btn btn-danger btn-sm ' type={'button'} value={'Borrar'}
                           onClick={this.handleBorrarGenero.bind(this, genre._id)}/></td>
            </tr>);



            return (
                <div className='menu2'>
                    <h1 className={'title'}>{'Mi Biblioteca > Géneros'}</h1>
                    <span>
                <form className="form-inline">
                    <p>Nombre:</p>
                    <div className="form-group mx-sm-3 mb-2">
                        {SaveInput}
                    </div>
                    <div>
                    {SaveButton}
                    </div>
                </form>
                </span>
                    <div>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Nombre</th>
                                <th colSpan={2}>Acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            {genreList}
                            </tbody>
                        </table>
                    </div>


                </div>
            );
        }


    handleCrearGenero() {
        this.setState({
            genreName: '',
        });
        this.props.createGenre(this.state.genreName);
        };

    handleIntroducirGenero(e){
        this.setState({
            genreName: e.target.value
        })
    };


    handleBorrarGenero(id){
        this.setState({
            isEditing: false,
            genreName:''
        });
        this.props.deleteGenre(id);
    };

    handleEditarGenero(genre_Id){
        this.setState({
            isEditing:!this.state.isEditing,
            genreName:''
        });
        this.props.updateGenre(genre_Id, this.state.genreName);
    };


    handleCopiarGenero(genre_Id){
        const genreName = this.props.genres.filter(genre => genre._id == genre_Id)[0].name;
        this.setState({
            genre_Id,
            genreName,
            isEditing:!this.state.isEditing
        });
    };

    handleCancelarGenero(){
        this.setState({
            isEditing: false,
            genreName: ''
        })
    }

}

const mapStateToProps = state => {
    return {
        genres: state.genres
    };
};

const mapDispatchToProps = dispatch =>({
    getGenres : (genres)=> dispatch (getGenres(genres)),
    createGenre: (name)=> dispatch (createGenre(name)),
    deleteGenre: (id)=> dispatch (deleteGenre(id)),
    updateGenre: (id,name)=> dispatch (updateGenre(id, name))
});

export default connect (mapStateToProps, mapDispatchToProps) (GenresPage);