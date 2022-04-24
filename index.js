// Находим форму в DOM
let formElement = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__button-close');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let inputName = document.querySelector('.popup__input-name');
let inputJob = document.querySelector('.popup__input-job');
let nameSave = document.querySelector('.popup__name-save');

function openForm() {
  formElement.classList.add('popup_active');
}

function closeForm() {
  formElement.classList.remove('popup_active');
}

function saveForm(evt) {
  evt.preventDefault();
  profileName.insertAdjacentHTML('beforeend', `
  <h1 class="profile__name">${inputName.value}</h1>
  `)
  formElement.classList.remove('popup_active');
}

editButton.addEventListener('click', openForm);
closeButton.addEventListener('click', closeForm);
nameSave.addEventListener('click', saveForm);




//     // Обработчик «отправки» формы, хотя пока
//     // она никуда отправляться не будет
//     function formSubmitHandler(evt) {
//       evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//       // Так мы можем определить свою логику отправки.
//       // О том, как это делать, расскажем позже.

//       // Получите значение полей jobInput и nameInput из свойства value

//       // Выберите элементы, куда должны быть вставлены значения полей

//       // Вставьте новые значения с помощью textContent
//     }

// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
// //formElement.addEventListener('submit', formSubmitHandler);