/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import h from 'hyperscript';
import { registerImage } from './lazy.js';

const app = document.querySelector('#app');
const url = 'https://randomfox.ca/images/';
const minImages = 1;
const maxImages = 123;

const btn_add = document.querySelector('#btn_add');
const btn_clear = document.querySelector('#btn_clear');

function addImageFox(id) {
  /* const target = document.createElement('picture');
  target.className = 'picture--background'; */

  const target = h('picture.picture--background'); //* usando hyperscript

  const imagen = document.createElement('img');
  imagen.dataset.src = `${url}${randomId()}.jpg`;
  target.appendChild(imagen);
  return target;
}

function randomId() {
  return Math.floor(Math.random() * (maxImages - minImages) + minImages);
}

const addImage = () => {
  const newImage = addImageFox();
  app.append(newImage);
  registerImage(newImage);
  appendedImages++;
  printLog();
};

//? borras las imagenes
const clearAllImages = () => {
  const mainContainer = document.querySelector('main');
  const images = document.querySelectorAll('picture');
  images.forEach((image) => {
    image.remove();
  });
};

btn_add.addEventListener('click', addImage);
btn_clear.addEventListener('click', clearAllImages);
