const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const loadImage = (entry) => {
  const container = entry.target; //es el picture no imagen
  const image = container.firstChild;
  const urlImage = image.dataset.src;

  //* Carga la imagen
  image.src = urlImage;
  // deja de escuchar u obserbar
  observer.unobserve(container);
  loadedImages++;
  printLog()
};

const observer = new IntersectionObserver((entries) => {
  entries
    .filter(isIntersecting) //verifica si hay interseccion
    .forEach(loadImage); // envias una accion
});

export const registerImage = (image) => {
  // agregar a intersection observer para que la escuche
  observer.observe(image);
};
