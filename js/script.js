const products1 = [
  {
    title: 'Gray T-Shirt',
    price: '$14.99',
    img: './assets/Link → 8-330x440.jpg.png',
  },
  {
    title: 'Black Jeans',
    price: '$34.99',
    img: './assets/Link → 10-2-330x440.jpg.png',
  },
  {
    title: 'Green Jacket',
    price: '$59.95',
    img: './assets/Link → 17-2-330x440.jpg.png',
  },
  {
    title: 'White Sneakers',
    price: '$49.95',
    img: './assets/Link → 17-330x440.jpg.png',
  },
];

const products2 = [
  {
    title: 'Blue Sweatshirt',
    price: '$29.95 - $179.95',
    img: ' ./assets/Link → 2-330x440.jpg.png ',
    colors: ['blue', 'black'],
  },
  {
    title: 'Red Hoodie',
    price: '$24.95 - $149.95',
    img: ' ./assets/Link → 4-12-330x440.jpg.png ',
    colors: ['red', 'green'],
  },
  {
    title: 'Yellow Pullover',
    price: '$19.95 - $129.95',
    img: ' ./assets/Link → 1-4-330x440.jpg.png ',
    colors: ['yellow', 'orange'],
  },
  {
    title: 'Purple Jacket',
    price: '$39.95 - $199.95',
    img: ' ./assets/Link → 17-330x440.jpg.png ',
    colors: ['purple', 'pink'],
  },
];

let containerOne = document.querySelector('.first-container');
let containerTwo = document.querySelector('.second-container');

for (let i = 0; i < products1.length; i++) {
  let cardsUp = document.createElement('div');
  cardsUp.className = 'cards-up';

  let picture = document.createElement('img');
  picture.src = products1[i].img;
  cardsUp.appendChild(picture);

  let description = document.createElement('h3');
  description.textContent = products1[i].title;
  cardsUp.appendChild(description);

  let price = document.createElement('p');
  price.textContent = products1[i].price;
  cardsUp.appendChild(price);

  containerOne.appendChild(cardsUp);
}
containerOne.style.display = 'flex';
containerOne.style.justifyContent = 'space-between';

for (let e = 0; e < products2.length; e++) {
  let cardsDown = document.createElement('div');
  cardsDown.className = 'cards-down';

  let pictureTwo = document.createElement('img');
  pictureTwo.src = products2[e].img;
  cardsDown.appendChild(pictureTwo);

  let descriptionTwo = document.createElement('h3');
  descriptionTwo.textContent = products2[e].title;
  cardsDown.appendChild(descriptionTwo);

  let pricetWO = document.createElement('p');
  pricetWO.textContent = products2[e].price;
  cardsDown.appendChild(pricetWO);

  let colors = document.createElement('div');
  let colorOne = document.createElement('div');
  let colorTwo = document.createElement('div');
  colors.appendChild(colorOne);
  colors.appendChild(colorTwo);
  cardsDown.appendChild(colors);
  colorOne.classList.add('color-one');
  colorTwo.classList.add('color-two');
  colors.classList.add('colors');

  cardsDown.classList.add('down');
  containerTwo.appendChild(cardsDown);
}
containerTwo.style.display = 'flex';
containerTwo.style.justifyContent = 'space-between';
