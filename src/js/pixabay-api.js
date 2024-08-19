const url = 'https://pixabay.com';
   export const fetchPhotos = inputValue => {
   const options = new URLSearchParams ({
    key: "45423395-a55c580a59309a3b931c40bb9",
    q: inputValue,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    
   })
    return fetch (`${url}/api/?${options}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
}


// export const fetchPhotos = async(inputValue) => {
//     // axios.defaults.baseURL = '';
//     return axios.get('https://pixabay.com/api/?', {
//         params: {
//             key: "45423395-a55c580a59309a3b931c40bb9",
//             q: inputValue,
//             image_type: "photo",
//             orientation: "horizontal",
//             safesearch: true
//         }
//     }).then();
// }