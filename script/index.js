import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import {
  buttonClosePopupNewFoto, buttonNewCard, closePopup, containerCard, editButton, editProfilePopup, inputJob,
  inputName, openPopup, popapArray, popupFormProfile, popupNewFoto, popupNewFotoForm, popupNewFotoInputName, popupNewFotoInputUrl, popupOpenFoto, popupOpenFotoBtnClose, popupProfileCloseButton,
  popupProfileSubmitForm, profileJob, profileName
} from './helpers.js';

//данные
const config = {
  inputSelector: 'popup__input',
  submitButtonSelector: 'popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];



//создание карточек из класса
initialCards.reverse().forEach((item) => {
  const card = new Card(item);
  const cardElement = card.generateCard();
  document.querySelector('.cards').append(cardElement);
})

// закрытие Попап на оверлей
popapArray.forEach((selectedPopup) => {
  selectedPopup.addEventListener('mousedown', function (evt) {
    if (evt.target == evt.currentTarget) {
      closePopup(selectedPopup)
    };
  });
});

// обработчик закрытия попапа с картинкой
popupOpenFotoBtnClose.addEventListener('click', () => {
  closePopup(popupOpenFoto);
});

// считывание данных пользователя
function inputUserData() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

// изменение данных пользователя
function submitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(editProfilePopup);
}

// функция создания новой карточки
function addNewСard(evt) {
  evt.preventDefault();
  const card = new Card({ link: popupNewFotoInputUrl.value, name: popupNewFotoInputName.value })
  const newCard = card.generateCard();
  containerCard.prepend(newCard);
  closePopup(popupNewFoto);
}

//
//вызовы
//
//открытие попапа редактирования профиля
const addCardForm = new FormValidator(config, popupFormProfile);
editButton.addEventListener('click', () => {
  inputUserData();
  addCardForm.cleanUpForm();
  addCardForm.enableValidation();
  openPopup(editProfilePopup);
});

//закрытие попапа редактирования профиля
popupProfileCloseButton.addEventListener('click', () => {
  closePopup(editProfilePopup);
});

//отправка формы редактирования профиля
popupProfileSubmitForm.addEventListener('submit', submitProfileForm);

//открытие попава добавления карточки
const editProfileForm = new FormValidator(config, popupNewFoto);
buttonNewCard.addEventListener('click', () => {
  popupNewFotoInputUrl.value = '';
  popupNewFotoInputName.value = '';
  editProfileForm.cleanUpForm();
  editProfileForm.enableValidation();
  openPopup(popupNewFoto);
});

//закрытие попапа добавления профиля
buttonClosePopupNewFoto.addEventListener('click', () => {
  closePopup(popupNewFoto);
});

//отправка попапа добавления новой карточки
popupNewFotoForm.addEventListener('submit', addNewСard);





















