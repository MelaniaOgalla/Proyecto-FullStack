

const genres = (state = [], action) => {
    const newGenreList = state.slice();


  switch (action.type) {

      case 'GET_GENRES_SUCCESS':


          return action.genres;


      case 'CREATE_GENRE_SUCCESS':


          return state.concat(action.genre);

      case 'DELETE_GENRE_SUCCESS':


          newGenreList.map(name => {
              if (name._id === action.genre) {
                  return newGenreList.splice(newGenreList.indexOf(name), 1);
              }

          });
          return newGenreList;

      case 'UPDATE_GENRE_SUCCESS':

          newGenreList.map(genre => {
              console.log("1234"+action.genre.name);
              if (genre._id === action.genre._id) {
               return   genre.name = action.genre.name;
              }});

          return newGenreList;

      default:
              return state;
  }
};




export default genres;
