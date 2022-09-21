import {Popup} from './Popup.js';

export class PopupWithDeletion extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._buttonDeletions = popupSelector.querySelector('popup__button-save-deletions');
    this._popupFormDeletions = this._popupSelector.querySelector('.popup__form-deletions');
  }


}