/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :) Javi');

const urlAbsolute = 'https://platzi-avo.vercel.app/';
const url = 'https://platzi-avo.vercel.app/api/avo';

//* INT
//* PERMITE DAR FORMATO A LAS MONEDAS Y PRECIOS

//conectar a la website
//convertirla a json

//* aqui va la funcion para dar formato
const formatPrice = (precio) => {
  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD',
  }).format(precio);
  return newPrice;
};

async function getAvocados() {
  const response = await fetch(url);
  const responseJSON = await response.json();
  const avocadosContainer = document.querySelector('#avocados-container');

  avocadosContainer.addEventListener('click', (event) => {
    if(event.target.nodeName === 'H2'){
      window.alert('hola amigos')
    }
  })

  let avocadosList = [];
  responseJSON.data.forEach((element) => {
    //* crear imagen
    const imagen = document.createElement('img');
    imagen.src = urlAbsolute + element.image;
    imagen.className = 'avocado-target--img';
    //* crear titulo
    const title = document.createElement('h2');
    title.textContent = element.name;
    title.className = 'titulo_avocado text-green-800';

    //* crear precio
    const price = document.createElement('p');
    price.textContent = formatPrice(element.price);
    price.className = 'precio_avocado text-yellow-900';

    const container_info = document.createElement('div');
    container_info.append(title, price);
    container_info.className = 'avocado-target-info';

    const container = document.createElement('div');
    container.append(imagen, container_info);
    container.className = 'avocado_target';

    avocadosList.push(container);
  });
  avocadosContainer.append(...avocadosList);
  avocadosContainer.className = 'avocados_container';
}

getAvocados();
