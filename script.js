let currentImage = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function showNextImage() {
  images[currentImage].style.display = 'none';
  currentImage = (currentImage + 1) % totalImages;
  images[currentImage].style.display = 'block';
}

setInterval(showNextImage, 3000); //Cambiar de imagen cada 3 segundos//
