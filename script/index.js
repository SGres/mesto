// ! осталось сделать:
// * плавное появление поапа

//данные попапа профиля
let formElement = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__button-close');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let inputName = document.querySelector('.popup__input_type_name');
let inputJob = document.querySelector('.popup__input_type_job');
let submitForm = document.querySelector('.popup__form');
let editProfilePopup = document.querySelector('.popup__edit-profile');


// данные контейнера с карточками
let containerCard = document.querySelector('.cards');
let buttonNewCard = document.querySelector('.profile__add-button');

// данные попапа добавления карточки
let popupNewFoto = document.querySelector('.popup__new-card');
let buttonClosePopupNewFoto = document.querySelector('.popup__button-close-popup-new-foto');
let popupNewFotoForm = document.querySelector('.popup__form-new-card');
let popupNewFotoInputName = document.querySelector('.popup__input_type_name-foto');
let popupNewFotoInputUrl = document.querySelector('.popup__input_type_url');

//данные попапа карточки
let popupOpenCard = document.querySelector('.popup__open-card');
let cardImg = popupOpenCard.querySelector('.popup__open-photo');
let cardTitle = popupOpenCard.querySelector('.popup__foto-title');
let buttonCardClose = popupOpenCard.querySelector('.popup__button-close-foto')

// массив с карточками
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//функции

// функция открытия\закрытия попапа
function openForm(selectedPopup) {
  selectedPopup.classList.add('popup_active');
  inputUserData();
}

function closeForm(selectedPopup) {
  selectedPopup.classList.remove('popup_active');
}

// считывание данных пользователя
function inputUserData() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

// изменение данных пользователя
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closeForm(editProfilePopup);
}

// функция создания карточек
function AddNewСard(evt) {
  evt.preventDefault();
  containerCard.prepend(makeCard({ link: popupNewFotoInputUrl.value, name: popupNewFotoInputName.value }));
  closeForm(popupNewFoto);
  evt.target.reset();
}

//функция выводы карт из массива
const makeCard = function ({ link, name }) {
  const tlCard = document.querySelector('.tl-card').content.querySelector('.card').cloneNode(true);
  const imgCard = tlCard.querySelector('.card__foto');
  const nameCard = tlCard.querySelector('.card__title');
  const btnLike = tlCard.querySelector('.card__like');
  const btnDelCard = tlCard.querySelector('.card__del');
  btnDelCard.addEventListener('click', function (evt) {
    evt.target.closest('.card').remove();
  });
  btnLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });
  imgCard.addEventListener('click', popupCardOpen);
  nameCard.textContent = name;
  imgCard.src = link;
  imgCard.alt = name;
  return tlCard;
};

//функция открытия попапа карточки
function popupCardOpen(evt) {
  cardImg.alt = evt.target.alt;
  cardImg.src = evt.target.src;
  cardTitle.textContent = evt.target.alt;
  openForm(popupOpenCard);
}


//вызовы

// вызов карт из массива
initialCards.reverse().forEach((item) => { containerCard.prepend(makeCard(item)) });

// действия с попапом пользователя
editButton.addEventListener('click', () => {
  openForm(editProfilePopup);
});

closeButton.addEventListener('click', () => {
  closeForm(editProfilePopup);
});

submitForm.addEventListener('submit', formSubmitHandler);

//дейтсвия с попапом карточки
buttonCardClose.addEventListener('click', () => {
  closeForm(popupOpenCard);
});

//действия с попапом добавления картинки
buttonNewCard.addEventListener('click', () => {
  openForm(popupNewFoto);
});

buttonClosePopupNewFoto.addEventListener('click', () => {
  closeForm(popupNewFoto);
});

popupNewFotoForm.addEventListener('submit', AddNewСard);

