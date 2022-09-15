import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupOpenFotoImage = this._popupSelector.querySelector('.popup__open-photo');
  }

  openPopup(name, link) {
    this._popupOpenFotoImage.alt = name;
    this._popupOpenFotoImage.src = link;
    this._popupSelector.querySelector('.popup__foto-title').textContent = name;
    super.openPopup();
  }
}