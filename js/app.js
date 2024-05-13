const burger = () => {
    const btn = document.querySelector('#burger')
    const off = document.querySelector('.offset')
    const close = document.querySelector('.offset nav svg')
    let currentImageIndex = 0;
    btn.addEventListener('click', () => {
        off.style.display = 'block'
    })
    close.addEventListener('click', () => {
        off.style.display = 'none'
    })
} 





const sliderImage = document.querySelector("header .footer div img");
const leftButton = document.querySelector("header .footer #left");
const rightButton = document.querySelector("header .footer #right");
const sliderText = document.querySelector("header .footer span");


let currentImageIndex = 0;
const images = ["images/slider1.jpg", "images/slider/slider2.jpg", "images/slider/slider3.jpg"];
const texts = ["Популярные бренды энергетических напитков на нашем сайте",
 "Заказывайте любимые энергетики через удобный вам маркетплейс",
 "Cвежие новости в мире энергетических напитков у нас на сайте"];

function changeImage(direction) {
  if (direction === "left") {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  } else if (direction === "right") {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  sliderImage.src = images[currentImageIndex];
  sliderText.textContent = texts[currentImageIndex];
}

leftButton.addEventListener("click", () => changeImage("left"));
rightButton.addEventListener("click", () => changeImage("right"));












burger()
