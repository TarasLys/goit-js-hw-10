import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_WNbTd4xBYEpWQg6tp8WGBnBLhHq5jjgtrklLPOrVOAwnfRgCRejAfalH4e9I5B6t";

export const fetchBreeds = () => {
  return axios.get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => console.error(error));
};

export const fetchCatByBreed = (breedId) => {
  return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data[0])
    .catch(error => console.error(error));
};