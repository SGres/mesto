import { FormValidator } from './Class/FormValidator.js';
import { Card } from './Class/Card.js';
import { Section } from './Class/Section.js';
import {
  buttonNewCard, containerSelector, editButton, editProfilePopup, inputJob,
  inputName, popapArray, popupFormProfile, popupNewFoto, popupNewFotoForm,
  popupNewFotoInputName, popupNewFotoInputUrl, popupOpenFoto, popupProfileSubmitForm, profileJob, profileName, templateCard
} from './helpers.js';
import { PopupWithImage } from './Class/PopupWithImage.js';
// import { PopupWithForm } from './Class/PopupWithForm.js';

//данные
const config = {
  inputSelector: 'popup__input',
  submitButtonSelector: 'popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

const initialCards = [
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

//обработчик клика по карточке
const handleCardClick = (name, link) => {
  const popupWithImage = new PopupWithImage(popupOpenFoto, name, link);
  popupWithImage.openPopup();
};

//создание карточек из начального массива
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card({data: item, handleCardClick}, templateCard);
    const cardElement = card.generateCard();
    cardList.setItem(cardElement);
  }},
  containerSelector);
cardList.renderItems();

// //обработчик клика по кнопке редактирования профиля
// editButton.addEventListener('click', () => {
//   const popupEditProfile = new PopupWithForm;
//   popupEditProfile.openPopup();
// };


// const addCardForm = new FormValidator(config, popupFormProfile);
// addCardForm.enableValidation();
// editButton.addEventListener('click', () => {
//   inputUserData();
//   addCardForm.cleanUpForm();
//   openPopup(editProfilePopup);
// });






// // функция создания новой карточки
// const addNewСard = (evt) => {
//   evt.preventDefault();
//   const cardElment = createCard({ link: popupNewFotoInputUrl.value, name: popupNewFotoInputName.value });
//   containerSelector.prepend(cardElment);
//   closePopup(popupNewFoto);
// }






// //открытие попава добавления карточки
// const editProfileForm = new FormValidator(config, popupNewFoto);
// editProfileForm.enableValidation();
// buttonNewCard.addEventListener('click', () => {
//   popupNewFotoForm.reset();
//   editProfileForm.cleanUpForm();
//   openPopup(popupNewFoto);
// });




// // считывание данных пользователя
// function inputUserData() {
//   inputName.value = profileName.textContent;
//   inputJob.value = profileJob.textContent;
// }

// // изменение данных пользователя
// function submitProfileForm(evt) {
//   evt.preventDefault();
//   profileName.textContent = inputName.value;
//   profileJob.textContent = inputJob.value;
//   closePopup(editProfilePopup);
// }

// //отправка формы редактирования профиля
// popupProfileSubmitForm.addEventListener('submit', submitProfileForm);

// //отправка попапа добавления новой карточки
// popupNewFotoForm.addEventListener('submit', addNewСard);





















