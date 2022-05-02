// Находим форму в DOM
let formElement = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__button-close');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let inputName = document.querySelector('.popup__input_type_name');
let inputJob = document.querySelector('.popup__input_type_job');
let submitForm = document.querySelector('.popup__form');

function openForm() {
  formElement.classList.add('popup_active');
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

function closeForm() {
  formElement.classList.remove('popup_active');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closeForm();
}

editButton.addEventListener('click', openForm);
closeButton.addEventListener('click', closeForm);
submitForm.addEventListener('submit', formSubmitHandler);

