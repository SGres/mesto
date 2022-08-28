//данные попапа профиля
export const editProfilePopup = document.querySelector('.popup_specific_edit-profile');
export const editButton = document.querySelector('.profile__edit-button');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const inputName = document.querySelector('.popup__input_type_name');
export const inputJob = document.querySelector('.popup__input_type_job');
export const popupProfileSubmitForm = editProfilePopup.querySelector('.popup__form');

// данные контейнера с карточками
export const containerCard = document.querySelector('.cards');
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
export const popupOpenFotoImage = document.querySelector('.popup__open-photo');
export const popupOpenFotoText = document.querySelector('.popup__foto-title');

//
export const popupFormProfile = document.querySelector('.popup__form_profile');



// открытие и закрытие Попап
export const openPopup = (selectedPopup) => {
  selectedPopup.classList.add('popup_active');
  document.addEventListener('keydown', handleEsc);
}

export const closePopup = (selectedPopup) => {
  selectedPopup.classList.remove('popup_active');
  document.removeEventListener('keydown', handleEsc);
}

//закрытие попапа на Escape
export function handleEsc(event) {
  if (event.key === "Escape") {
    popapArray.forEach(closePopup);
  }
};

