import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';



import './index.css';
import HomePage from '../containers/HomePage';
import GenresPage from '../containers/GenresPage';
import AuthorsPage from '../containers/AuthorsPage';
import BooksPage from '../containers/BooksPage';
import BooksReservePage from '../containers/BooksReservePage';
import BooksLoanPage from '../containers/BooksLoanPage';
import BooksGatherPage from '../containers/BooksGatherPage';
import BooksMaintenancePage from '../containers/BooksMaintenancePage';
import BooksOutOfTimePage from '../containers/BooksOutOfTimePage';


class AppStructure extends Component {

  render() {
    return (


        <Router>

      <div className='main' >
        <div className="appContainer">

            <ul className="list">
                <li><Link className={'link'} style={{fontSize : 20 }} to='/'>Mi Biblioteca</Link></li><br/>
                <li><Link className={'link'} to='/generos'>Géneros</Link></li>
                <li><Link className={'link'} to='/autores'>Autores</Link></li>
                <li><Link className={'link'} to='/libros'>Libros</Link></li>
                <li><Link className={'link'} to='/libros/reservar'>Reservar Libro</Link></li>
                <li className={'link'} style={{fontSize : 20 }}>Gestión de la Biblioteca</li>
                <li><Link className={'link'} to='/gestion/prestar'>Prestar Libro</Link></li>
                <li><Link className={'link'} to='/gestion/recoger'>Recoger Libro</Link></li>
                <li><Link className={'link'} to='/gestion/mantenimiento'>Libros en mantenimiento</Link></li>
                <li><Link className={'link'} to='/gestion/fuera-plazo'>Libros fuera de plazo</Link></li>
            </ul>

        </div>
        <div>

            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route  path="/generos" component={GenresPage} />
              <Route  path="/autores" component={AuthorsPage} />
              <Route exact path="/libros" component={BooksPage} />
              <Route  path="/libros/reservar" component={BooksReservePage} />
              <Route  path="/gestion/prestar" component={BooksLoanPage} />
              <Route  path="/gestion/recoger" component={BooksGatherPage} />
              <Route  path="/gestion/mantenimiento" component={BooksMaintenancePage} />
              <Route  path="/gestion/fuera-plazo" component={BooksOutOfTimePage} />
            </Switch>
        </div>
      </div>
  </Router>
    );
  }

}



export default AppStructure;

