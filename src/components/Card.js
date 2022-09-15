export class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = this._cardSelector.content.cloneNode(true).children[0]
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.card__title').textContent = this._name;
    this._cardImage = this._element.querySelector('.card__foto');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._setEventListeners();
    return this._element;
  }

  _handleDelClick() {
    this._element.closest('.card').remove();
  }

  _handleLikeClick() {
    this._btnLike.classList.toggle('card__like_active');
  }

  _setEventListeners() {
    this._btnLike = this._element.querySelector('.card__like');
    this._element.querySelector('.card__del').addEventListener('click', () => {
      this._handleDelClick();
    });
    this._element.querySelector('.card__block-foto').addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
    this._btnLike.addEventListener('click', () => {
      this._handleLikeClick();
    })
  }
}