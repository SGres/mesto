export class Card {
  constructor(
    { data, handleCardClick, handleCardDelete, handleCardLike }, cardSelector, userID) {
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this.id = item._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardLike = handleCardLike;
    this._data = data;
    this._userID = userID;
  }

  _getTemplate() {
    const cardElement = this._cardSelector.content.cloneNode(true).children[0]
    return cardElement;
  }

  //Проверка колличества лайков
  handleAddLikesNumber(likes) {
    this._cardLikes.textContent = likes;
    if (this._cardLikes.textContent > 0) {
      this._cardLikes.classList.add('card__like_active');
    } else {
      this._cardLikes.classList.remove('card__like_active');
    }
  }

  //Проверка наличия моих лайков
  _handleAddLikesActive() {
    if (this._likesCallback()) {
      this._cardLike.classList.add('card__like_active');
    } else {
      this._cardLike.classList.remove('card__like_active');
    }
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.card__title').textContent = this._name;
    this._cardImage = this._element.querySelector('.card__foto');
    this._btnLike = this._element.querySelector('.card__like');
    this._cardbtnDel = this._element.querySelector('.card__del');
    this._cardbtnImage = this._element.querySelector('.card__block-foto');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._setEventListeners();

    this._cardLikes.textContent = this._likes.length;
    this._handleHideDeleteButton();
    this.handleAddLikesNumber(this._likes.length);
    this._handleAddLikesActive();

    return this._element;
  }

  _handleDelClick() {
    this._element.remove();
    this._element = null;
  }

  //Вроде проверка количества лайков
  toggleLike() {
    if (this._cardLike.classList.contains('card__like_active')) {
      this._handleCardLike(this._id, false, this._element);

    } else {
      this._handleCardLike(this._id, true, this._element);

    }
    this._cardLike.classList.toggle('card__like_active');

  }

  //вывод иконки удаления карточки
  _handleHideDeleteButton() {
    if (this._item.owner._id == this._userID) {
      //тут поидее нужно передать элемент "корзинки"
      this._cardDelete.style.display = "block";
    } else {
      this._cardDelete.style.display = "none";
    }
  }

  //условие наличия среди лайков моих
  _likesCallback() {
    return this._item.likes.some(like => like._id == this._userID)
  }

  //слушатели с новыми аргументами
  _setEventListeners() {
    this._cardbtnDel.addEventListener('click', () => {
      this._handleDelClick(this._id, this);
    });
    this._cardbtnImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
    this._btnLike.addEventListener('click', () => {
      this.toggleLike();
    })
  }
}