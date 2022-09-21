export class Card {
  constructor({
    name, link, likes, _id, owner: { _id: ownerId }
  }, userId, cardSelector,
    { cardHandleClick, cardDeleteHendler, cardLikeHendler }) {
    this._link = link;
    this._name = name;
    this._likes = likes;
    this.id = _id;
    this._userId = userId;
    this._isOwner = userId === ownerId;
    this._cardSelector = cardSelector;
    this._cardHandleClick = cardHandleClick;
    this._cardDeleteHendler = cardDeleteHendler;
    this._cardLikeHendler = cardLikeHendler;

  }

  _getTemplate() {
    const cardElement = this._cardSelector.content.cloneNode(true).children[0]
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.card__title').textContent = this._name;
    this._cardImage = this._element.querySelector('.card__foto');
    this._btnLike = this._element.querySelector('.card__like');
    this._btnDelete = this._element.querySelector('.card__del');
    this._btnImage = this._element.querySelector('.card__block-foto');
    this._likesCounter = this._element.querySelector('.card__like-counter');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._setEventListeners();
    this._renderLikes();
    return this._element;
  }



  setLikes(newLikes) {
    this._likes = newLikes;
    this._renderLikes();
  }

  // Проверка наличия моего лайка
  _isLiked() {
    return this._likes.map((item) => item._id).includes(this._userId)
  }

  // Отображение состояния и количества лайков
  _renderLikes() {
    if (this._isLiked()) {
      this._btnLike.classList.add('card__like_active');
    } else {
      this._btnLike.classList.remove('card__like_active');
    }
    this._likesCounter.textContent = this._likes.length;
  }

  // Удаление карточки
  removeCard() {
    this._element.remove('card');
  }

  //
  _handleDeleteClick() {
    this._deleteCardHendler(this._id, this.removeCard);
  }

  _cardHandleClick() {
    this._cardHandleClick(this._name, this._link);
  }

  // Установка слушателей
  _setEventListeners() {
    if (this._isOwner) {
      this._btnDelete.addEventListener('click', this._handleDeleteClick)
    } else {
      this._btnDelete.remove();
    }

    this._btnImage.addEventListener('click', this._cardHandleClick);
  }
}