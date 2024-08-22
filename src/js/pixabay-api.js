import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

export const fetchPhotos = async(inputValue) => {
  const photosParams = {
  params: {
            key: "45423395-a55c580a59309a3b931c40bb9",
            q: inputValue,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
}
    return axios.get('/api/', photosParams);
}

