export const popupEditProfile = document.querySelector('.popup_specific_edit-profile');
export const inputNameProfile = popupEditProfile.querySelector('.popup__input_type_name');
export const inputAboutProfile = popupEditProfile.querySelector('.popup__input_type_job')
export const profileEditButton = document.querySelector('.profile__edit-button');
export const buttonNewCard = document.querySelector('.profile__add-button');
export const avatarElement = document.querySelector('.profile__avatar');

//данные
export const config = {
  inputSelector: 'popup__input',
  submitButtonSelector: 'popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};

export const buttonCaptions = {
  normalCaption: 'Сохранить',
  activeCaption: 'Сохранение...'
};

export const confirmDeleteButtonCaptions = {
  normalCaption: 'Да',
  activeCaption: 'Удаление...'
};


