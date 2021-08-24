import axios from 'axios';

const KEY = 'AIzaSyCQqOZGCaVQlRwfYB-EBe7vqA-iUd-1WFI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  }
})