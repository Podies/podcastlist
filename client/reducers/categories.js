const initialState = {
  list: [],
  listLoaded: false
};

const categories = (state=initialState, action) => {
  let copy = Object.assign({}, state);
  switch(action.type) {
    case 'UPDATE_CATEGORY':
      copy.list = action.data;
      copy.listLoaded = true;
      return copy
    default:
      return state;
  }
};

export default categories;