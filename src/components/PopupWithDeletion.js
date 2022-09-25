import { Popup } from './Popup.js';

export class PopupWithDeletion extends Popup {
  constructor(popupSelector, submitHandler, { normalCaption, activeCaption }) {
    super(popupSelector);
    this._handleSubmit = submitHandler
    this._normalCaption = normalCaption;
    this._activeCaption = activeCaption;
    this._submitButton = this._popupElement.querySelector('.popup__button-form');
    this._popupForm = this._popupElement.querySelector('.popup__form');
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this.toggleButtonCaption = this.toggleButtonCaption.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  toggleButtonCaption(isSave) {
    this._submitButton.textContent = isSave ? this._activeCaption : this._normalCaption;
  }

  openPopup(cardId, removeCardCallback) {
    this._cardId = cardId;
    this._removeCardCallback = removeCardCallback;
    super.openPopup();
  }

  _handleFormSubmit = (evt) => {
    evt.preventDefault();
    this._handleSubmit(this._cardId, this._removeCardCallback, this.toggleButtonCaption, this.closePopup);
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._handleFormSubmit);
  }

}