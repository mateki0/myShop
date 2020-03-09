// Image Change buttons

const leftButton = document.querySelector('.left-image-button');
const rightButton = document.querySelector('.right-image-button');


function changeImage(el) {
  const shopAdvertise = document.getElementById('shop-advertise');
  var style = shopAdvertise.style;
  if ((style.backgroundImage == 'url("images/first.jpg")') && (el.target.className.includes('left-image-button') || (el.target.parentElement.className.includes('left-image-button')))) {
    style.backgroundImage = 'url("images/third.jpg")';
  } else if ((style.backgroundImage == 'url("images/third.jpg")') && (el.target.className.includes('left-image-button') || (el.target.parentElement.className.includes('left-image-button')))) {
    style.backgroundImage = 'url("images/second.jpg")';
  } else if ((style.backgroundImage == 'url("images/second.jpg")') && (el.target.className.includes('left-image-button') || (el.target.parentElement.className.includes('left-image-button')))) {
    style.backgroundImage = 'url("images/first.jpg")';
  }
  if ((style.backgroundImage == 'url("images/first.jpg")') && (el.target.className.includes('right-image-button') || (el.target.parentElement.className.includes('right-image-button')))) {
    style.backgroundImage = 'url("images/second.jpg")';
  } else if ((style.backgroundImage == 'url("images/third.jpg")') && (el.target.className.includes('right-image-button') || (el.target.parentElement.className.includes('right-image-button')))) {
    style.backgroundImage = 'url("images/first.jpg")';
  } else if ((style.backgroundImage == 'url("images/second.jpg")') && (el.target.className.includes('right-image-button') || (el.target.parentElement.className.includes('right-image-button')))) {
    style.backgroundImage = 'url("images/third.jpg")';
  }

}
leftButton.addEventListener('click', changeImage)
rightButton.addEventListener('click', changeImage)