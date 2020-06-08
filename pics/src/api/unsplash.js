import axios from 'axios';

export default axios.create({
  headers: {
    Authorization: 'Client-ID ZuAM0vunDf3TM5zX2TuPcFPKOYxCWApqJ9_OvFNhw90'
  },
  baseURL: 'https://api.unsplash.com'
});