export class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  //закрытие попапа на крестик или клик по оверлею
  setEventListeners() {
    document.addEventListener('keyup', this._handleEscClose);
    this._popupElement.addEventListener('mousedown', this._handleCloseClick);
  }

  _handleCloseClick = (evt) => {
    if (evt.target.classList.contains('popup_active') ||
      evt.target.classList.contains('popup__button-close')) {
      this.closePopup();
    }
  }

  //закрытие попапа на Escape
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.closePopup();
    }
  };

  openPopup() {
    this._popupElement.classList.add('popup_active');
    this.setEventListeners();
  }

  closePopup() {
    this._popupElement.classList.remove('popup_active');
    this._popupElement.removeEventListener('mousedown', this._handleCloseClick);
    document.removeEventListener('keyup', this._handleEscClose);
  }
}