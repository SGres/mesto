import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupSelector.querySelector('.popup__form');
    this._inputList = this._popupSelector.querySelectorAll('.popup__input');
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
    this._handleFormSubmit(this._getInputValues());
    this.closePopup();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this.handleSubmitClick);
  }

  closePopup() {
    super.closePopup();
    this._popupForm.removeEventListener('submit', this.handleSubmitClick);
  }

  setInputValues(data) {
    this._inputList.forEach((input, index) => (input.value = data[index]));
  }

}
