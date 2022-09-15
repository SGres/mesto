import './index.css';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import {
  buttonNewCard, containerSelector, editButton, popupEditProfile, popupFormProfile, popupNewFoto, popupNewFotoForm,
  popupOpenFoto, profileJob, profileName, templateCard
} from '../components/helpers.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

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

const userInfo = new UserInfo(profileName, profileJob);

//обработчик клика по карточке
const handleCardClick = (name, link) => {
  const popupWithImage = new PopupWithImage(popupOpenFoto, name, link);
  popupWithImage.openPopup();
};

// функция создания новой карточки
const createCard = ([name, link]) => {
  const card = new Card({ data: { name, link }, handleCardClick }, templateCard);
  return card.generateCard();
}

//открытие попава добавления карточки
const editProfileForm = new FormValidator(config, popupFormProfile);
editProfileForm.enableValidation();
const classPopupEditProfile = new PopupWithForm({
  popupSelector: popupEditProfile,
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData);
  },
});

//обработчик клика по кнопке редактирования профиля
editButton.addEventListener('click', () => {
  const { name, job } = userInfo.getUserInfo();
  classPopupEditProfile.openPopup();
  classPopupEditProfile.setInputValues([job, name]);
  editProfileForm.resetValidation();

});

const addCardForm = new FormValidator(config, popupNewFoto);
addCardForm.enableValidation();
const classPopupAddCard = new PopupWithForm({
  popupSelector: popupNewFoto,
  handleFormSubmit: (formData) => {
    const card = createCard(formData);
    cardList.setItem(card);
  },
});
buttonNewCard.addEventListener('click', () => {
  popupNewFotoForm.reset();
  addCardForm.cleanUpForm();
  classPopupAddCard.openPopup();
});



//создание карточек из начального массива
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card({ data: item, handleCardClick }, templateCard);
    const cardElement = card.generateCard();
    cardList.setItem(cardElement);
  }
},
  containerSelector);
cardList.renderItems();























