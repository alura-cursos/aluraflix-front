const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://semana1aluraflix.herokuapp.com/videos/';

export default {
  URL_BACKEND_TOP,
};
