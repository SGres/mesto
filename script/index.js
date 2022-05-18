//данные

let formElement = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__button-close');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let inputName = document.querySelector('.popup__input_type_name');
let inputJob = document.querySelector('.popup__input_type_job');
let submitForm = document.querySelector('.popup__form');
let containerCard = document.querySelector('.cards');

let editProfilePopup = document.querySelector('.popup_edit-profile');


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
  formElement.classList.add('popup_active');
  inputUserData();
}

function closeForm() {
  formElement.classList.remove('popup_active');
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
  closeForm();
}

// функция создания карточек


// функция лайка
function likeEdit(evt) {
  evt.target.classList.toggle('card__like_active');
}


// вызов попапа общий
editButton.addEventListener('click', () => {
  openForm(editProfilePopup);
});


const addCard = function ({ link, name }) {
  const tlCard = document.querySelector('.tl-card').content.querySelector('.card').cloneNode(true);
  const imgCard = tlCard.querySelector('.card__foto');
  const nameCard = tlCard.querySelector('.card__title');
  const btnLike = tlCard.querySelector('.card__like');
  // const btnDelCard = tlCard.querySelector('.card__del');
  // const btnLikeCard = tlCard.querySelector('.card__like');
  // btnDelCard.addEventListener('click', );
  btnLike.addEventListener('click', likeEdit);
  // imgCard.addEventListener('click');
  nameCard.textContent = name;
  imgCard.src = link;
  imgCard.alt = name;
  containerCard.append(tlCard);
};



//вызовы

// вызов карт из массива
initialCards.forEach(addCard);

// вызов попапа профиля
editButton.addEventListener('click', () => {
  openForm(editProfilePopup);
});

// закрытие попапа
closeButton.addEventListener('click', closeForm);

// сохранение попапа пользователя
submitForm.addEventListener('submit', formSubmitHandler);