import ko from 'knockout';
import '../node_modules/muicss/dist/css/mui.css';

const costumer = {
  name: ko.observable('Гость'),
};

const btn = document.querySelector('#nameButton');
const input = document.querySelector('#nameInput');
const mainForm = document.querySelector('#mainForm');

mainForm.addEventListener('submit', (evt) => evt.preventDefault());

btn.addEventListener('click', (evt) => {
  evt.preventDefault();
  costumer.name(input.value.trim());
  input.value = '';
});

ko.applyBindings(costumer);
