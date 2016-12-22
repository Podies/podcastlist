import * as api from './ajaxCalls';
import * as actions from './actionCreators';

const fetchCategory = () => {
  return(dispatch) => {
    return api.ajaxFetchCategory()
      .then((response) => {
        dispatch(actions.updateCategory(response.categories))
      },
      (err) => {
        console.log(err);
      }
    );
  };
};

const fetchPodcast = () => {
  return(dispatch) => {
    return api.ajaxFetchPodcast()
      .then((response) => {
        dispatch(actions.addpodcast(response.podcasts))
      },
      (err) => {
        console.log(err);
      }
    );
  };
};

module.exports = fetchCategory, fetchPodcast ;