import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const list = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
const loaderEl = document.querySelector('.loader');

export function createGallery(images) {
  const galleryItems = [];

  images.forEach(image => {
    const {
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = image;
    const newListElem = document.createElement('li');
    const link = document.createElement('a');
    const img = document.createElement('img');
    const info = document.createElement('div');
    info.classList.add('info');
    info.innerHTML = `
  <div class="info-item">
    <span class="info-title">Likes</span>
    <span class="info-value">${likes}</span>
  </div>
  <div class="info-item">
    <span class="info-title">Views</span>
    <span class="info-value">${views}</span>
  </div>
  <div class="info-item">
    <span class="info-title">Comments</span>
    <span class="info-value">${comments}</span>
  </div>
  <div class="info-item">
    <span class="info-title">Downloads</span>
    <span class="info-value">${downloads}</span>
  </div>
`;

    newListElem.classList.add('gallery-item');

    link.classList.add('gallery-link');
    link.setAttribute('href', `${largeImageURL}`);

    img.classList.add('gallery-image');
    img.setAttribute('src', `${webformatURL}`);
    img.setAttribute('alt', `${tags}`);

    link.append(img);
    newListElem.append(link, info);
    galleryItems.push(newListElem);
  });

  list.append(...galleryItems);
  lightbox.refresh();
}
export function clearGallery() {
  list.innerHTML = '';
}
export function showLoader() {
  loaderEl.classList.remove('is-hidden');
}
export function hideLoader() {
  loaderEl.classList.add('is-hidden');
}
