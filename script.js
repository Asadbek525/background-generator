let css = document.getElementsByTagName('h3')[0];
let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let body = document.getElementById('body');
let button = document.getElementsByTagName('button')[0];
let setBack = () => {
  body.style.background =
    'linear-gradient(to right,' + color1.value + ',' + color2.value + ')';
  css.innerText =
    'linear-gradient(to right,' + color1.value + ',' + color2.value + ')';
};
let set6digit = () => {
  let s = '';
  for (let i = 0; i < 6; i++) {
    let a = Math.floor(Math.random() * 16);
    switch (a) {
      case 10: {
        a = 'a';
        break;
      }
      case 11: {
        a = 'b';
        break;
      }
      case 12: {
        a = 'c';
        break;
      }
      case 13: {
        a = 'd';
        break;
      }
      case 14: {
        a = 'e';
        break;
      }
      case 15: {
        a = 'f';
        break;
      }
    }
    s += a.toString();
  }
  return s;
};
let setRandomColor = () => {
  color1.value = '#' + set6digit();
  color2.value = '#' + set6digit();
  setBack();
};

const bodyload = () => {
  css.innerHTML =
    'linear-gradient(to right,' + color1.value + ',' + color2.value + ')';
  setBack();
  setRandomColor();
};

color1.addEventListener('input', setBack);
color2.addEventListener('input', setBack);

button.addEventListener('click', setRandomColor);
