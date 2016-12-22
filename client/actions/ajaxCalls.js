import axios from 'axios';
const endpoint = 'http://localhost:3000';

const ajaxFetchCategory = () => {
  const url = endpoint+'/api/categories';

  return axios.get(url)
  .then((response) => {
    if(response.status !== 200) {
      return Promise.reject('Category Loading Failed');
    }else {
      return response.data;
    }
  });
}

const ajaxFetchPodcast = (params) => {
  const url = endpoint+'/api/categories/'+params.category+'podcasts';

  return axios.get(url)
  .then((response) => {
    if(response.status !== 200) {
      return Promise.reject('Podcast Loading Failed');
    }else {
      return response.data;
    }
  });
}

module.exports = ajaxFetchPodcast, ajaxFetchCategory;