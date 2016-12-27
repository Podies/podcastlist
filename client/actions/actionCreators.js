const updateCategory = (data) => {
  return {
    type: 'UPDATE_CATEGORY',
    data
  };
};

const addPodcast = (data) => {
  return {
    type: 'ADD_PODCAST',
    data
  };
};

const addFeaturedPodcasts = (data) => {
  return {
    type: 'ADD_FEATURED_PODCASTS',
    data,
  }
}
const searchPodcasts = (data) => {
  return {
    type: 'SEARCH_PODCASTS',
    data,
  }
}

export {
  updateCategory, addPodcast, addFeaturedPodcasts
}
