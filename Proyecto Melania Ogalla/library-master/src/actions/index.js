import axios from 'axios';


//DISPATCH BOOKS

export const getBooks = () => {
    return dispatch => {
        dispatch(getBooksRequest());
        axios.get(`http://localhost:3001/catalog/books`)
            .then(function (response) {
                console.log(response);
                dispatch(getBooksSuccess(response.data.bookList));
            })
            .catch(function (error) {
                dispatch(getBooksError(error));
            });
    };
};




//DISPATCH GENRES

export const getGenres = () => {
    return dispatch => {
        dispatch(getGenresRequest());
        axios.get(`http://localhost:3001/catalog/genres`)
            .then(function (response) {
                console.log(response);
                dispatch(getGenresSuccess(response.data.genreList));
            })
            .catch(function (error) {
                dispatch(getGenresError(error));
            });
        };
    };


//DISPATCH AUTHORS

export const getAuthors = () => {
    return dispatch => {
        dispatch(getAuthorsRequest());
            axios.get(`http://localhost:3001/catalog/authors`)
                .then(function (response) {
                    console.log(response);
                    dispatch(getAuthorsSuccess(response.data.authorList));
                })
                .catch(function (error) {
                    dispatch(getAuthorsError(error));
                });
        };
    };


//GET BOOKS

function getBooksRequest() {
    return {
        type: 'GET_BOOKS_REQUEST',
        isFetching: true
    };
}

function getBooksSuccess (books) {
    return {
        type: 'GET_BOOKS_SUCCESS',
        isFetching: false,
        error: false,
        books
    };
}

function getBooksError(errorMessage) {
    return {
        type: 'GET_BOOKS_ERROR',
        isFetching: false,
        error: true,
        errorMessage
    };
}

//GET AUTHORS

function getAuthorsRequest() {
    return {
        type: 'GET_AUTHORS_REQUEST',
        isFetching: true
    };
}

function getAuthorsSuccess (authors) {
    return {
        type: 'GET_AUTHORS_SUCCESS',
        isFetching: false,
        error: false,
        authors
    };
}

function getAuthorsError(errorMessage) {
    return {
        type: 'GET_AUTHORS_ERROR',
        isFetching: false,
        error: true,
        errorMessage
    };
}

// GET GENRES

function getGenresRequest() {
    return {
        type: 'GET_GENRES_REQUEST',
        isFetching: true
    };
}

function getGenresSuccess (genres) {
    return {
        type: 'GET_GENRES_SUCCESS',
        isFetching: false,
        error: false,
        genres
    };
}

function getGenresError(errorMessage) {
    return {
        type: 'GET_GENRES_ERROR',
        isFetching: false,
        error: true,
        errorMessage
    };
}

 /*esto para crear Genero*/

export const createGenre = (name) =>{
    return dispatch => {
        dispatch(createGenreRequest());
        axios.post(`http://localhost:3001/catalog/genre/create`,{
            name
        })
        .then(function (response) {
            dispatch(createGenreSuccess(response.data));

        })

        .catch(function (error) {
            dispatch(createGenreError(error));
        });
    };
};

function createGenreRequest() {
    return {
        type: 'CREATE_GENRE_REQUEST',
        isFetching: true
    };
}

function createGenreSuccess (genre) {
    return {
        type: 'CREATE_GENRE_SUCCESS',
        isFetching: false,
        error: false,
        genre
    };
}

function createGenreError(errorMessage) {
    return {
        type: 'CREATE_GENRE_ERROR',
        isFetching: false,
        error: true,
        errorMessage
    };
}

export const deleteGenre = (id) =>{
    return dispatch => {
        dispatch(deleteGenreRequest());
        axios.delete(`http://localhost:3001/catalog/genre/${id}/delete`)
            .then(function (response) {
                dispatch(deleteGenreSuccess(response.data));

            })

            .catch(function (error) {
                dispatch(deleteGenreError(error));
            });
    };
};

function deleteGenreRequest() {
    return {
        type: 'DELETE_GENRE_REQUEST',
        isFetching: true
    };
}

function deleteGenreSuccess (genre) {
    return {
        type: 'DELETE_GENRE_SUCCESS',
        isFetching: false,
        error: false,
        genre
    };
}

function deleteGenreError(errorMessage) {
    return {
        type: 'DELETE_GENRE_ERROR',
        isFetching: false,
        error: true,
        errorMessage
    };
}

export const updateGenre = (id, name) =>{
    return dispatch => {
        dispatch(updateGenreRequest());
        axios.put(`http://localhost:3001/catalog/genre/${id}/update`, {name})
            .then(function (response) {
                dispatch(updateGenreSuccess(response.data));

            })

            .catch(function (error) {
                dispatch(updateGenreError(error));
            });
    };
};

function updateGenreRequest() {
    return {
        type: 'UPDATE_GENRE_REQUEST',
        isFetching: true
    };
}

function updateGenreSuccess (genre, name) {
    return {
        type: 'UPDATE_GENRE_SUCCESS',
        isFetching: false,
        error: false,
        genre,
        name
    };
}

function updateGenreError(errorMessage) {
    return {
        type: 'UPDATE_GENRE_ERROR',
        isFetching: false,
        error: true,
        errorMessage
    };
}

// AUTORES

export const createAuthor = (first_name, family_name, date_of_birth, date_of_death) =>{
    return dispatch => {
        dispatch(createAuthorRequest());
        axios.post(`http://localhost:3001/catalog/author/create`,{
            first_name,
            family_name,
            date_of_birth,
            date_of_death

        })
            .then(function (response) {
                dispatch(createAuthorSuccess(response.data));

            })

            .catch(function (error) {
                dispatch(createAuthorError(error));
            });
    };
};

function createAuthorRequest() {
    return {
        type: 'CREATE_AUTHOR_REQUEST',
        isFetching: true
    };
}

function createAuthorSuccess (author) {
    return {
        type: 'CREATE_AUTHOR_SUCCESS',
        isFetching: false,
        error: false,
        author
    };
}

function createAuthorError(errorMessage) {
    return {
        type: 'CREATE_AUTHOR_ERROR',
        isFetching: false,
        error: true,
        errorMessage
    };
}

    export const deleteAuthor = (id) =>{
        return dispatch => {
            dispatch(deleteAuthorRequest());
            axios.delete(`http://localhost:3001/catalog/author/${id}/delete`)
                .then(function (response) {
                    dispatch(deleteAuthorSuccess(response.data));

                })

                .catch(function (error) {
                    dispatch(deleteAuthorError(error));
                });
        };
    };

    function deleteAuthorRequest() {
        return {
            type: 'DELETE_AUTHOR_REQUEST',
            isFetching: true
        };
    }

    function deleteAuthorSuccess (author) {
        return {
            type: 'DELETE_AUTHOR_SUCCESS',
            isFetching: false,
            error: false,
            author
        };
    }

    function deleteAuthorError(errorMessage) {
        return {
            type: 'DELETE_AUTHOR_ERROR',
            isFetching: false,
            error: true,
            errorMessage
        };

}

export const updateAuthor = (id, first_name, family_name, date_of_birth, date_of_death) => {
    return dispatch => {
        dispatch(updateAuthorRequest());


        axios.put(`http://localhost:3001/catalog/author/${id}/update`, {first_name, family_name, date_of_birth, date_of_death})
            .then(function (response) {
                dispatch(updateAuthorSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(updateAuthorError(error));
            });
    };
};

function updateAuthorRequest() {
    return {
        type: 'UPDATE_AUTHOR_REQUEST',
        isFetching: true
    };
}

function updateAuthorSuccess (author, first_name, family_name, date_of_birth, date_of_death) {
    return {
        type: 'UPDATE_AUTHOR_SUCCESS',
        isFetching: false,
        error: false,
        author,
        first_name,
        family_name,
        date_of_birth,
        date_of_death
    };
}

function updateAuthorError(errorMessage) {
    return {
        type: 'UPDATE_AUTHOR_ERROR',
        isFetching: false,
        error: true,
        errorMessage
    };
}

// BOOKS

/*export const createBook = (genre,title,summary,author) =>{
    return dispatch => {
        dispatch(createAuthorRequest());
        axios.post(`http://localhost:3001/catalog/author/create`,{
            first_name,
            family_name,
            date_of_birth,
            date_of_death

        })
            .then(function (response) {
                dispatch(createAuthorSuccess(response.data));

            })

            .catch(function (error) {
                dispatch(createAuthorError(error));
            });
    };
};

function createAuthorRequest() {
    return {
        type: 'CREATE_AUTHOR_REQUEST',
        isFetching: true
    };
}

function createAuthorSuccess (author) {
    return {
        type: 'CREATE_AUTHOR_SUCCESS',
        isFetching: false,
        error: false,
        author
    };
}

function createAuthorError(errorMessage) {
    return {
        type: 'CREATE_AUTHOR_ERROR',
        isFetching: false,
        error: true,
        errorMessage
    };
}

export const deleteAuthor = (id) =>{
    return dispatch => {
        dispatch(deleteAuthorRequest());
        axios.delete(`http://localhost:3001/catalog/author/${id}/delete`)
            .then(function (response) {
                dispatch(deleteAuthorSuccess(response.data));

            })

            .catch(function (error) {
                dispatch(deleteAuthorError(error));
            });
    };
};

function deleteAuthorRequest() {
    return {
        type: 'DELETE_AUTHOR_REQUEST',
        isFetching: true
    };
}

function deleteAuthorSuccess (author) {
    return {
        type: 'DELETE_AUTHOR_SUCCESS',
        isFetching: false,
        error: false,
        author
    };
}

function deleteAuthorError(errorMessage) {
    return {
        type: 'DELETE_AUTHOR_ERROR',
        isFetching: false,
        error: true,
        errorMessage
    };

}

export const updateAuthor = (id, first_name, family_name, date_of_birth, date_of_death) => {
    return dispatch => {
        dispatch(updateAuthorRequest());


        axios.put(`http://localhost:3001/catalog/author/${id}/update`, {first_name, family_name, date_of_birth, date_of_death})
            .then(function (response) {
                dispatch(updateAuthorSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(updateAuthorError(error));
            });
    };
};

function updateAuthorRequest() {
    return {
        type: 'UPDATE_AUTHOR_REQUEST',
        isFetching: true
    };
}

function updateAuthorSuccess (author, first_name, family_name, date_of_birth, date_of_death) {
    return {
        type: 'UPDATE_AUTHOR_SUCCESS',
        isFetching: false,
        error: false,
        author,
        first_name,
        family_name,
        date_of_birth,
        date_of_death
    };
}

function updateAuthorError(errorMessage) {
    return {
        type: 'UPDATE_AUTHOR_ERROR',
        isFetching: false,
        error: true,
        errorMessage
    };
}*/


