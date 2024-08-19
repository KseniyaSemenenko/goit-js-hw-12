export const createGalleryCardTemplate = imgInfo => {
  return `
  <li class="gallery-card">
  <div class="container-el">
  <div class="container-img">
    <a href="${imgInfo.largeImageURL}"><img class="gallery-img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" /></a>
  </div>  <div class="container-text">
      <p class="text-name">Likes <span class="span-numbers">${imgInfo.likes}</span></p>
      <p class="text-name">Views <span class="span-numbers">${imgInfo.views}</span></p>
      <p class="text-name">Comments <span class="span-numbers">${imgInfo.comments}</span></p>
      <p class="text-name">Downloads <span class="span-numbers">${imgInfo.downloads}</span></p>
    </div>
  </div>
</li>
  `;
};