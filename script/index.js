import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import {
  buttonNewCard, closePopup, containerCard, editButton, editProfilePopup, inputJob,
  inputName, openPopup, popapArray, popupFormProfile, popupNewFoto, popupNewFotoForm,
  popupNewFotoInputName, popupNewFotoInputUrl, popupOpenFoto, popupOpenFotoImage, popupOpenFotoText,
  popupProfileSubmitForm, profileJob, profileName, templateCard
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

//обработка щелчка по карточке
const handleCardClick = (name, link) => {
  popupOpenFotoImage.alt = name;
  popupOpenFotoImage.src = link;
  popupOpenFotoText.textContent = name;
  openPopup(popupOpenFoto);
};

//функция создания карточки
const createCard = (item) => {
  const card = new Card(item, templateCard, handleCardClick);
  const cardElement = card.generateCard();
  return cardElement
}

// функция создания новой карточки
const addNewСard = (evt) => {
  evt.preventDefault();
  const cardElment = createCard({ link: popupNewFotoInputUrl.value, name: popupNewFotoInputName.value });
  containerCard.prepend(cardElment);
  closePopup(popupNewFoto);
}

//создание карточек из массива
initialCards.reverse().forEach((item) => {
  const cardElement = createCard(item)
  containerCard.append(cardElement);
})

popapArray.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_active')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__button-close')) {
      closePopup(popup)
    }
  })
})









//открытие попапа редактирования профиля
const addCardForm = new FormValidator(config, popupFormProfile);
addCardForm.enableValidation();
editButton.addEventListener('click', () => {
  inputUserData();
  addCardForm.cleanUpForm();
  openPopup(editProfilePopup);
});





//открытие попава добавления карточки
const editProfileForm = new FormValidator(config, popupNewFoto);
editProfileForm.enableValidation();
buttonNewCard.addEventListener('click', () => {
  popupNewFotoForm.reset();
  editProfileForm.cleanUpForm();
  openPopup(popupNewFoto);
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

//отправка формы редактирования профиля
popupProfileSubmitForm.addEventListener('submit', submitProfileForm);

//отправка попапа добавления новой карточки
popupNewFotoForm.addEventListener('submit', addNewСard);





















