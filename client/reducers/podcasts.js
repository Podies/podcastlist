const initialState = {
  list: [],
  listLoaded: false
};

const podcasts = (state=initialState, action) => {
  const copy = Object.assign({}, state);
  switch(action.type) {
    case 'ADD_PODCAST':
      copy.list = action.data;
      copy.listLoaded = true;
      return copy;
    default: 
      return state;
  }
};

export default podcasts;