import throttle from 'lodash.throttle';

const formData = {
  email: '',
  message: '',
};
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
feedback();

function onFormInput() {
  formData.email = input.value;
  formData.message = textarea.value;
  localStorage.setItem('STORAGE_KEY', JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  if (localStorage.getItem('STORAGE_KEY')) {
    console.log(formData);
  }
  localStorage.clear();

  evt.currentTarget.reset();
}

function feedback() {
  const parseFormData = JSON.parse(localStorage.getItem('STORAGE_KEY'));

  if (parseFormData) {
    input.value = parseFormData.email || '';
    textarea.value = parseFormData.message || '';
  }
}
