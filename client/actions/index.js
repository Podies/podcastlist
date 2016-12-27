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

const fetchPodcasts = (params) => {
  return(dispatch) => {
    return api.ajaxFetchPodcast(params)
      .then((response) => {
        dispatch(actions.addPodcast(response))
      },
      (err) => {
        console.log(err);
      }
    );
  };
};
const fetchFeaturedPodcasts = () => {
  return(dispatch) => {
    return api.ajaxFetchFeaturedPodcast()
      .then((response) => {
        dispatch(actions.addFeaturedPodcasts(response.podcasts))
      },
      (err) => {
        console.log(err);
      }
    );
  };
};
const searchPodcasts = (data) => {
  return (dispatch) => {
    return api.ajaxFetchSearchPodcasts(data).then(
      (responseData) => {
        dispatch(actions.searchPodcasts(responseData.search));
      },
      (err) => {
        dispatch(actions.updateFailed(err));
      }
    );
  };
};

export {
  fetchCategory, fetchPodcasts, fetchFeaturedPodcasts, searchPodcasts
}
