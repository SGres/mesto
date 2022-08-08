//данные

//данные попапа профиля
const editProfilePopup = document.querySelector('.popup_specific_edit-profile');
const editButton = document.querySelector('.profile__edit-button');
const popupProfileCloseButton = editProfilePopup.querySelector('.popup__button-close');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');
const popupProfileSubmitForm = editProfilePopup.querySelector('.popup__form');

// данные контейнера с карточками
const containerCard = document.querySelector('.cards');
const buttonNewCard = document.querySelector('.profile__add-button');

// данные попапа добавления карточки
const popupNewFoto = document.querySelector('.popup_specific_new-card');
const buttonClosePopupNewFoto = document.querySelector('.popup__button-close-popup-new-foto');
const popupNewFotoForm = document.querySelector('.popup__form-new-card');
const popupNewFotoInputName = document.querySelector('.popup__input_type_name-foto');
const popupNewFotoInputUrl = document.querySelector('.popup__input_type_url');

//общие данные попапов
const popapArray = Array.from(document.querySelectorAll('.popup'));

// класс Card

class Card {
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

  _generatePopupCard() {
    const popupOpenCard = document.querySelector('.popup_specific_open-card');
    const cardImg = popupOpenCard.querySelector('.popup__open-photo');
    const cardTitle = popupOpenCard.querySelector('.popup__foto-title');
    const buttonCardClose = popupOpenCard.querySelector('.popup__button-close-foto');
    buttonCardClose.addEventListener('click', () => {
      closePopup(popupOpenCard);
    });
    cardImg.alt = this._name;
    cardImg.src = this._link;
    cardTitle.textContent = this._name;
    openPopup(popupOpenCard);
  }

  _setEventListeners() {
    this._element.querySelector('.card__del').addEventListener('click', () => {
      this._btnDelCard();
    });
    this._element.querySelector('.card__block-foto').addEventListener('click', () => {
      this._generatePopupCard();
    })
  }
}

//создание карточек из класса

initialCards.forEach((item) => {
  const card = new Card(item);
  const cardElement = card.generateCard();
  document.querySelector('.cards').append(cardElement);
})

// открытие и закрытие Попап

let openPopup = (selectedPopup) => {
  selectedPopup.classList.add('popup_active');
  document.addEventListener('keydown', popupCloseEsc);
}

let closePopup = (selectedPopup) => {
  selectedPopup.classList.remove('popup_active');
  document.removeEventListener('keydown', popupCloseEsc);
}

// закрытие Попап на esc и оверлей

popapArray.forEach((selectedPopup) => {
  selectedPopup.addEventListener('mousedown', function (evt) {
    if (evt.target == evt.currentTarget) {
      closePopup(selectedPopup)
    };
  });
});

function popupCloseEsc(event) {
  popapArray.forEach((selectedPopup) => {
    if (event.key === "Escape") {
      closePopup(selectedPopup);
    }
  });
};












/* //функции



// считывание данных пользователя
function inputUserData() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

// изменение данных пользователя
function submitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(editProfilePopup);
}

// функция создания карточек
function addNewСard(evt) {
  evt.preventDefault();
  containerCard.prepend(makeCard({ link: popupNewFotoInputUrl.value, name: popupNewFotoInputName.value }));
  closePopup(popupNewFoto);
  evt.target.reset();
}







//вызовы



// действия с попапом пользователя
editButton.addEventListener('click', () => {
  openPopup(editProfilePopup);
  inputUserData();
  validationOpening(popupProfileSubmitForm, config);
});

popupProfileCloseButton.addEventListener('click', () => {
  closePopup(editProfilePopup);
});

popupProfileSubmitForm.addEventListener('submit', submitProfileForm);


//действия с попапом добавления картинки
buttonNewCard.addEventListener('click', () => {
  openPopup(popupNewFoto);
  validationOpening(popupNewFotoForm, config);
});

buttonClosePopupNewFoto.addEventListener('click', () => {
  closePopup(popupNewFoto);
});

popupNewFotoForm.addEventListener('submit', addNewСard);

//закрытие попапов на оверлей
popapArray.forEach((selectedPopup) => {
  selectedPopup.addEventListener('mousedown', function (evt) {
    if (evt.target == evt.currentTarget) {
      closePopup(selectedPopup)
    };
  });
}); */