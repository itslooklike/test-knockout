import ko from 'knockout';
import casual from 'casual-browserify';
import '../node_modules/muicss/dist/css/mui.css';

function Course(title, price) {
  this.title = ko.observable(title);
  this.price = ko.observable(price);
}

class Customer {
  constructor() {
    this._name = ko.observable('Гость');
    this._city = ko.observable('Москва');
    this.info = ko.computed(() => `Привет ${this.name} я из ${this.city}`);
    this.coursesList = ko.observableArray([
      new Course('HTML', casual.uuid),
      new Course('CSS', casual.uuid),
      new Course('JS', casual.uuid),
      new Course('REACT', casual.uuid),
    ]);
    this.deleteCourse = (course) => {
      // this.coursesList.remove(course);
      this.coursesList.destroy(course);
    };
    this.addCourse = () => this.coursesList.push(new Course(casual.word, casual.uuid));
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

  handleSimpleClick = (model, event) => {
    console.log(model);
    console.log(event);
  };
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
