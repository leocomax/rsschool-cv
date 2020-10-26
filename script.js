const sliders = document.querySelectorAll('.slider > input');
const image = document.querySelector('.image');

sliders.forEach(el => el.addEventListener('input', e => {
  const { value, id } = e.target;
  image.style.setProperty(`--${id}`, value);
}));