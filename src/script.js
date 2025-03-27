var scene = document.getElementById('scene');
var parallax = new Parallax(scene, {
  selector: '.layer'
});

const scrollBox = document.querySelector('.scroll-box');
setInterval(() => {
  if (scrollBox.scrollTop + scrollBox.clientHeight >= scrollBox.scrollHeight) {
    scrollBox.scrollTop = 0;
  } else {
    scrollBox.scrollTop += 1;
  }
}, 100);

scrollBox.scrollTo({
  top: 0, // or any target
  behavior: 'smooth'
});