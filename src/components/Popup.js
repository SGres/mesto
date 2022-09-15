export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  //закрытие попапа на крестик или клик по оверлею
  setEventListeners() {
    this._popupSelector.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_active')) {
        this.closePopup();
      }
      if (evt.target.classList.contains('popup__button-close')) {
        this.closePopup()
      }
    })
  }

  //закрытие попапа на Escape
  _handleEscClose() {
    document.addEventListener('keyup', (evt) => {
      if (evt.key === 'Escape') {
        this.closePopup();
      }
    });
  }

  openPopup() {
    this._popupSelector.classList.add('popup_active');
    this.setEventListeners();
    this._handleEscClose();
  }

  closePopup() {
    this._popupSelector.classList.remove('popup_active');
  }
}