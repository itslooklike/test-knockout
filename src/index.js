import ko from 'knockout';
import '../node_modules/muicss/dist/css/mui.css';

class Customer {
  constructor() {
    this._name = ko.observable('Гость');
    this._city = ko.observable('Москва');
    this.info = ko.computed(() => `Привет ${this.name} я из ${this.city}`);
  }

  get name() {
    return this._name();
  }

  set name(newName) {
    this._name(newName);
  }

  get city() {
    return this._city();
  }

  set city(newName) {
    this._city(newName);
  }
}

const mainForm = document.querySelector('#mainForm');

mainForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const onlyInputs = [...evt.target.elements].filter(({ nodeName }) => nodeName === 'INPUT');

  onlyInputs.forEach((input) => {
    const { value, name } = input;
    const trimmedValue = value.trim();

    if (!trimmedValue) return;

    if (name === 'nameInput') {
      customer.name = trimmedValue;
      input.value = '';
    } else if (name === 'cityInput') {
      customer.city = trimmedValue;
      input.value = '';
    }
  });
});

const customer = new Customer();

ko.applyBindings(customer);
