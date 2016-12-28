import axios from 'axios';
const endpoint = 'http://localhost:3000';

const ajaxFetchCategory = (data) => {
  const url = endpoint+'/api/categories';

  return axios.get(url)
  .then((response) => {
    if(response.status !== 200) {
      return Promise.reject('Category Loading Failed');
    }else {
      return response.data;
    }
  });
};

const ajaxFetchPodcast = (params) => {
  const url = endpoint+'/api/categories/'+params.category+'/podcasts';

  return axios.get(url)
  .then((response) => {
    if(response.status !== 200) {
      return Promise.reject('Podcast Loading Failed');
    }else {
      return response.data;
    }
  });
};
const ajaxFetchFeaturedPodcast = () => {
  const url = endpoint+'/api/featured';

  return axios.get(url)
  .then((response) => {
    if(response.status !== 200) {
      return Promise.reject('Podcast Loading Failed');
    }else {
      return response.data;
    }
  });
};
const ajaxFetchSearchPodcasts = (searchTerm) => {
  let url = endpoint+'/api/search/'+searchTerm;
  return axios.get(url)
    .then((response) => {
      if (response.status !== 200) {
        return Promise.reject('No Newsletter Found');
      }
      return response.data;
    });
}
const ajaxSubscribe = (info) => {
  let url = endpoint+'/api/user/subscribe';

  return axios.post(url, info)
    .then((response) => {
      // console.log(info, "called in ajax");
      return console.log('Submitted Successfully');
    });
}

export {
  ajaxFetchPodcast, ajaxFetchCategory, ajaxFetchFeaturedPodcast, ajaxFetchSearchPodcasts, ajaxSubscribe
}
