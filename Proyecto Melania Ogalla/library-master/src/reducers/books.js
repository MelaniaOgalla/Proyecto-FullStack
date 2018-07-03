const books = (state = [], action) => {
  switch (action.type) {
      case 'GET_BOOKS_REQUEST':

          return  state;


      case 'GET_BOOKS_SUCCESS':

          return action.books;

      case 'GET_BOOKS_ERROR':


      default:
          return state;
  }
};

export default books;
