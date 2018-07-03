const authors = (state = [], action) => {
    const newAuthorList = state.slice();


  switch (action.type) {

      case 'GET_AUTHORS_SUCCESS':


          return action.authors;


      case 'CREATE_AUTHOR_SUCCESS':


          return state.concat(action.author);

      case 'DELETE_AUTHOR_SUCCESS':

          newAuthorList.map(name => {
              if (name._id === action.author) {
                  return newAuthorList.splice(newAuthorList.indexOf(name), 1);
              }

          });
          return newAuthorList;


      case 'UPDATE_AUTHOR_SUCCESS':

          newAuthorList.map(name=>{

              if(name._id===action.author._id) {
                  name.first_name=action.author.first_name;
                  name.family_name=action.author.family_name;
                  name.date_of_birth=action.author.date_of_birth;
                  name.date_of_death=action.author.date_of_death;
              }
          });
          return newAuthorList;



      default:
          return state;
  }
};

export default authors;


