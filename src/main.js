
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import { createGalleryCardTemplate } from './js/render-functions.js'
import { fetchPhotos } from './js/pixabay-api.js'

const formEl = document.querySelector('.js-form');
const listEl = document.querySelector('.list-photo');
const loaderEl = document.querySelector('.js-loader');
const btnLoadMore = document.querySelector('.js-btn-load-more');


let currentPage = 1;
let inputValue = '';
let cardHeight = 0;

const formSubmit = async event=> {
  try {
    event.preventDefault();

    inputValue = formEl.elements.img.value.trim();
    currentPage = 1;
if (inputValue === "") {
      iziToast.error({
        message: 'Please enter a search term.',
      });
      return
    }
formEl.reset();
        loaderEl.classList.remove('is-hidden');
    const response = await fetchPhotos(inputValue, currentPage);
    
        if (response.data.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      listEl.innerHTML = '';
          formEl.reset();
          btnLoadMore.classList.add('is-hidden');
          return;
    }

    const galleryCardsTemplate = response.data.hits.map(imgDetails => createGalleryCardTemplate(imgDetails)).join('');

    listEl.innerHTML = galleryCardsTemplate;

    const galleryLiEl = listEl.querySelector('li');
    cardHeight = galleryLiEl.getBoundingClientRect().height;
        newSimple.refresh();
    loaderEl.classList.add('is-hidden');
    btnLoadMore.classList.remove('is-hidden');
  }
  catch (error) {
    console.log(error);
  }
  finally { loaderEl.classList.add('is-hidden'); }
}

const buttonClickForLoad = async event => {
  try {
    loaderEl.classList.remove('is-hidden');
    currentPage++;
    const response = await fetchPhotos(inputValue, currentPage);
    const galleryCardsTemplate = response.data.hits.map(imgDetails => createGalleryCardTemplate(imgDetails)).join('');
    listEl.insertAdjacentHTML('beforeend', galleryCardsTemplate);

    scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    })

    // if (response.data.hits.length === 0) {
    if (listEl.children.length >= response.data.totalHits) {
      btnLoadMore.classList.add('is-hidden');
       iziToast.error({
        message: "We're sorry, but you've reached the end of search results.",
      });
      return
    }
    newSimple.refresh();
  } catch (error) {
    console.log(error); 
  } finally { loaderEl.classList.add('is-hidden'); }
}

const newSimple = new SimpleLightbox('.container-img a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,

});

formEl.addEventListener('submit', formSubmit);
btnLoadMore.addEventListener('click', buttonClickForLoad)

// const emptyEl = document.querySelector('.js-empty-el');
// const observedOptions = {
//   root: null,
//   rootMargin: '0px 0px 400px 0px',
//   threshold: 1,
// }
// const observedCallBack = entries => {
//   if (entries[0].isIntersecting) {
//     console.log('Hello');
//   }
// }
// const observer = new IntersectionObserver(observedCallBack, observedOptions);
// observer.observe(emptyEl);