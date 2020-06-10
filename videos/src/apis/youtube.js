import axios from 'axios';

const KEY = 'AIzaSyD0uJZWa9fpUZPh3kLhatbk768DCVj6cAE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});