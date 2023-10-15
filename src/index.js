import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select'

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const divPicture = document.querySelector(".div-picture");

loader.style.display = 'none';
error.style.display = 'none';

loader.style.display = 'block';

fetchBreeds().then(breeds => {
  loader.style.display = 'none';

    breeds.forEach(breed => {

      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
  });

  new SlimSelect({
  select: '.breed-select',
})

}).catch(() => {
  loader.style.display = 'none';
  
  Notiflix.Notify.warning('❌ Oops! Something went wrong! Try reloading the page!', {
  // position: 'center-top' , 
});
});


breedSelect.addEventListener('change', (event) => {
      catInfo.style.display = 'none';
      loader.style.display = 'block';
  fetchCatByBreed(event.target.value)
    .then(cat => {
      loader.style.display = 'none';
      catInfo.style.display = 'block';
      
    divPicture.innerHTML = `
    <img class="picture" src="${cat.url}" alt="${cat.breeds[0].name}">`
    catInfo.innerHTML = `
      <h2 class="title">${cat.breeds[0].name}</h2>
      <p class="text">${cat.breeds[0].description}</p>
      <p class="temp"><strong>Temperament:</strong> ${cat.breeds[0].temperament}</p>`;
  })
    
    .catch(() => {
    loader.style.display = 'none';
      
      Notiflix.Notify.warning('❌ Oops! Something went wrong! Try reloading the page!', {
  //  position: 'center-top' , 
});
  });
});































