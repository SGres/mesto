//данные попапа профиля
export const popupEditProfile = document.querySelector('.popup_specific_edit-profile');
export const editButton = document.querySelector('.profile__edit-button');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const inputName = document.querySelector('.popup__input_type_name');
export const inputJob = document.querySelector('.popup__input_type_job');
export const popupProfileSubmitForm = popupEditProfile.querySelector('.popup__form');

// данные контейнера с карточками
export const containerSelector = document.querySelector('.cards');
export const buttonNewCard = document.querySelector('.profile__add-button');

// данные попапа добавления карточки
export const templateCard = document.querySelector('.tl-card');
export const popupNewFoto = document.querySelector('.popup_specific_new-card');
export const popupNewFotoForm = document.querySelector('.popup__form-new-card');
export const popupNewFotoInputName = document.querySelector('.popup__input_type_name-foto');
export const popupNewFotoInputUrl = document.querySelector('.popup__input_type_url');

//общие данные попапов
export const popapArray = Array.from(document.querySelectorAll('.popup'));

export const popupOpenFoto = document.querySelector('.popup_specific_open-card');

//
export const popupFormProfile = document.querySelector('.popup__form_profile');

//данные
export const config = {
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


