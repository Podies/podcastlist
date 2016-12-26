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

export {
  updateCategory, addPodcast
}
