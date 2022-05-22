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

//данные попапа карточки
const popupOpenCard = document.querySelector('.popup_specific_open-card');
const cardImg = popupOpenCard.querySelector('.popup__open-photo');
const cardTitle = popupOpenCard.querySelector('.popup__foto-title');
const buttonCardClose = popupOpenCard.querySelector('.popup__button-close-foto');


//функции

// функция открытия\закрытия попапа
function openPopup(selectedPopup) {
  selectedPopup.classList.add('popup_active');
  inputUserData();
}

function closePopup(selectedPopup) {
  selectedPopup.classList.remove('popup_active');
}

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
  openPopup(popupOpenCard);
}


//вызовы

// вызов карт из массива
initialCards.reverse().forEach((item) => { containerCard.prepend(makeCard(item)) });

// действия с попапом пользователя
editButton.addEventListener('click', () => {
  openPopup(editProfilePopup);
});

popupProfileCloseButton.addEventListener('click', () => {
  closePopup(editProfilePopup);
});

popupProfileSubmitForm.addEventListener('submit', submitProfileForm);

//дейтсвия с попапом карточки
buttonCardClose.addEventListener('click', () => {
  closePopup(popupOpenCard);
});

//действия с попапом добавления картинки
buttonNewCard.addEventListener('click', () => {
  openPopup(popupNewFoto);
});

buttonClosePopupNewFoto.addEventListener('click', () => {
  closePopup(popupNewFoto);
});

popupNewFotoForm.addEventListener('submit', addNewСard);

