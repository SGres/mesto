import './index.css';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import {
  buttonNewCard, containerSelector, editButton, popupEditProfile, popupFormProfile, popupNewFoto, popupNewFotoForm,
  popupOpenFoto, profileJob, profileName, templateCard
} from '../utils/helpers.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { config } from '../utils/helpers.js';
import { initialCards } from '../utils/helpers.js';

const userInfo = new UserInfo(profileName, profileJob);
const popupWithImage = new PopupWithImage(popupOpenFoto);

//обработчик клика по карточке
const handleCardClick = (name, link) => {
  popupWithImage.openPopup(name, link);
};

// функция создания новой карточки
const createCard = (formData) => {
  const card = new Card({ data: formData, handleCardClick }, templateCard);
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

//обработчик нажатия на кнопку добавления карточки
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
