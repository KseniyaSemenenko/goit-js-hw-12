
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import { createGalleryCardTemplate } from './js/render-functions.js'
import { fetchPhotos } from './js/pixabay-api.js'

const formEl = document.querySelector('.js-form');
const listEl = document.querySelector('.list-photo');

function formSubmit(event) {
  event.preventDefault();
  const inputValue = formEl.elements.img.value.trim();
  if (inputValue === "") {
    iziToast.error({
      message: 'Please enter a search term.',
    });
    return
  }

  formEl.reset();
  const loaderEl = document.querySelector('.js-loader');
  loaderEl.classList.remove('is-hidden');

  fetchPhotos(inputValue).then(data => {

    if (data.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      listEl.innerHTML = '';
      formEl.reset();

      return;
    }

    const galleryCardsTemplate = data.hits.map(imgDetails => createGalleryCardTemplate(imgDetails)).join('');

    listEl.innerHTML = galleryCardsTemplate;

    newSimple.refresh();
  })
    .catch(error => {
      console.log(error);
    })
    .finally(() => { loaderEl.classList.add('is-hidden'); })

}

formEl.addEventListener('submit', formSubmit);

const newSimple = new SimpleLightbox('.container-img a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,

});

const btnLoadMore = document.querySelector('.js-btn-load-more');
btnLoadMore.addEventListener('click', () => {})