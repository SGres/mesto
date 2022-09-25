import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, { normalCaption, activeCaption }) {
    super(popupSelector);
    this._normalCaption = normalCaption;
    this._activeCaption = activeCaption;
    this._handleFormSubmit = handleFormSubmit;
    this._submitButton = this._popupElement.querySelector('.popup__button-form');
    this._popupForm = this._popupElement.querySelector('.popup__form');
    this._inputList = this._popupElement.querySelectorAll('.popup__input');
    this.toggleButtonCaption = this.toggleButtonCaption.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  toggleButtonCaption(isSave) {
    this._submitButton.textContent = isSave ? this._activeCaption : this._normalCaption;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;

  }

  handleSubmitClick = (evt) => {

    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues(), this.toggleButtonCaption, this.closePopup);
    console.dir(this._getInputValues());
  }

  setEventListeners() {
    console.dir(this._popupForm);
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this.handleSubmitClick);

  }

  closePopup() {
    this._popupForm.reset();
    super.closePopup();
    this._popupForm.removeEventListener('submit', this.handleSubmitClick);
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
    }
}
