import { openPopup, popupOpenFoto, popupOpenFotoImage, popupOpenFotoText } from "./helpers.js";

export class Card {
  constructor(data) {
    this._name = data.name
    this._link = data.link
  }

  _getTemplate() {
    const cardElement = document
      .querySelector('.tl-card')
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.card__title').textContent = this._name;
    this._element.querySelector('.card__foto').src = this._link;
    this._element.querySelector('.card__foto').alt = this._text;
    this._setEventListeners();
    console.log(this._element);
    return this._element;
  }

  _btnDelCard() {
    this._element.closest('.card').remove();
  }

  _btnLike() {
    this._element.querySelector('.card__like').classList.toggle('card__like_active');
  }

  _setEventListeners() {
    this._element.querySelector('.card__del').addEventListener('click', () => {
      this._btnDelCard();
    });
    this._element.querySelector('.card__block-foto').addEventListener('click', () => {
      popupOpenFotoImage.alt = this._name;
      popupOpenFotoImage.src = this._link;
      popupOpenFotoText.textContent = this._name;
      openPopup(popupOpenFoto);
    })
    this._element.querySelector('.card__like').addEventListener('click', () => {
      this._btnLike();
    })
  }
}