const axios = require('axios');

export const SEARCH_KEY_DOWN = 'SEARCH_KEY_DOWN';
export const CLEAR_SEARCH_TIMEOUT = 'CLEAR_SEARCH_TIMEOUT';
export const RECEIVE_HERO = 'RECEIVE_HERO';
export const SET_SEARCH_TIMEOUT = 'SET_SEARCH_TIMEOUT';

export const keyDownUpdateSearchTerm = key => dispatch => {
  dispatch({
    type: SEARCH_KEY_DOWN,
    key
  });
  dispatch({
    type: SET_SEARCH_TIMEOUT,
    searchTimeout: setTimeout(() => dispatch(clearTimeout()), 1500)
  })
};

export const clearTimeout = () => ({
  type: CLEAR_SEARCH_TIMEOUT,
});

export const fetchHero = heroName => dispatch => {
  return axios.get(`/hero/${heroName}`, { responseType: 'json' })
    .then(response => response.data)
    .then(hero => dispatch(receiveHero(heroName, hero)));
};
