// featured [ { _id: {}, podcasts: [] }]

const initialState = {
  list: [],
  category: {},
  featured: [],
  listLoaded: false
};

const podcasts = (state=initialState, action) => {
  const copy = Object.assign({}, state);
  switch(action.type) {
    case 'ADD_PODCAST':
      copy.list = action.data.podcasts;
      copy.category = action.data.category;
      copy.listLoaded = true;
      return copy;
    case 'ADD_FEATURED_PODCASTS':
      copy.featured = action.data;
      return copy;
    case 'SEARCH_PODCASTS':
      copy.list = action.data;
      return copy;
    default:
      return state;
  }
};

export default podcasts;
