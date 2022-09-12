import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector, name, link) {
    super(popupSelector);
    this._name = name;
    this._link = link;
  }

  openPopup() {
    super.openPopup();
    const popupOpenFotoImage = this._popupSelector.querySelector('.popup__open-photo');
    popupOpenFotoImage.alt = this._name;
    popupOpenFotoImage.src = this._link;
    this._popupSelector.querySelector('.popup__foto-title').textContent = this._name;
  }
}