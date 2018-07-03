const express = require('express');
const router = express.Router();

// Require controller modules.
const bookController = require('../controllers/bookController');
const authorController = require('../controllers/authorController');
const genreController = require('../controllers/genreController');
const bookinstanceController = require('../controllers/bookinstanceController');

/// BOOK ROUTES ///

// GET catalog home page.
router.get('/', bookController.index);

// POST request for creating Book.
router.post('/book/create', bookController.bookCreatePost); // ESTA RUTA PORQUE CON GET NO PUEDES PASAR INFORMACION


// DELETE request to delete Book.
router.delete('/book/:id/delete', bookController.bookDeleteDelete); // ESTA PARA BORRAR UN LIBRO

// PUT request to update Book.
router.put('/book/:id/update', bookController.bookUpdatePut); // ESTO PARA EDITAR UN LIBRO


// GET request for one Book.
router.get('/book/:id', bookController.bookDetail); // ESTO PARA OBTENER UN LIBRO

// GET request for list of all Book items.
router.get('/books', bookController.bookList); // ESTO PARA OBTENER TODOS LOS LIBROS

/// AUTHOR ROUTES ///


// POST request for creating Author.
router.post('/author/create', authorController.authorCreatePost);

// Delete request to delete Author.
router.delete('/author/:id/delete', authorController.authorDeleteDelete);

// GET request to update Author.
router.put('/author/:id/update', authorController.authorUpdatePut);


// GET request for one Author.
router.get('/author/:id', authorController.authorDetail);

// GET request for list of all Authors.
router.get('/authors', authorController.authorList);

/// GENRE ROUTES ///



//POST request for creating Genre.
router.post('/genre/create', genreController.genreCreatePost);


// DELETE request to delete Genre.
router.delete('/genre/:id/delete', genreController.genreDeleteDelete);

// GET request to update Genre.
router.put('/genre/:id/update', genreController.genreUpdatePut);


// GET request for one Genre.
router.get('/genre/:id', genreController.genreDetail);

// GET request for list of all Genre.
router.get('/genres', genreController.genreList);




/// BOOKINSTANCE ROUTES ///


// POST request for creating BookInstance.
router.post('/bookinstance/create', bookinstanceController.bookinstanceCreatePost);

// DELETE request to delete BookInstance.
router.delete('/bookinstance/:id/delete', bookinstanceController.bookinstanceDeleteDelete);

// PUT request to update BookInstance.
router.put('/bookinstance/:id/update', bookinstanceController.bookinstanceUpdatePut);

// GET request for one BookInstance.
router.get('/bookinstance/:id', bookinstanceController.bookinstanceDetail);

// GET request for list of all BookInstance.
router.get('/bookinstances', bookinstanceController.bookinstanceList);

module.exports = router;