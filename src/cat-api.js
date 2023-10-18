import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_WNbTd4xBYEpWQg6tp8WGBnBLhHq5jjgtrklLPOrVOAwnfRgCRejAfalH4e9I5B6t";
axios.defaults.baseURL = "https://api.thecatapi.com/v1/"

export const fetchBreeds = () => {
  return axios.get('breeds')
    .then(response => response.data)
};

export const fetchCatByBreed = (breedId) => {
  return axios.get(`images/search?breed_ids=${breedId}`)
    .then(response => response.data[0])
};


