import './index.css';

//Импорт классов
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithDeletion } from '../components/PopupWithDeletion.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';

//Импорт констант
import {
  buttonNewCard, containerSelector, editButton, popupDeletions, popupEditProfile, popupFormProfile, popupNewFoto, popupNewFotoForm,
  popupOpenFoto, profileJob, profileName, templateCard, avatarElement, popupDeletionCard, popupUpdateAvatar
} from '../utils/helpers.js';
import { config } from '../utils/helpers.js';
import { initialCards } from '../utils/helpers.js';

const updateAvatarHandler = (data) => {
  api.updateAvatar(data.link)
    .then((res) => {
      console.dir(res);
      user.setUserInfo(res);
    })
    .catch((err) => {
      console.dir(err);
    })
}

//Создания экземпляров.
// const userInfo = new UserInfo({
//   profileName: profileName,
//   profileJob: profileJob,
//   avatarElement: avatarElement
// });

// const api = new Api('https://mesto.nomoreparties.co/v1/cohort-50');

// const profileEditForm = new FormValidator(config, popupFormProfile);
// profileEditForm.enableValidation();

// const addCardForm = new FormValidator(config, popupNewFoto);
// addCardForm.enableValidation();

// const avatarEditForm = new FormValidator(config, popupNewFoto);
// avatarEditForm.enableValidation();

// const popupWithImage = new PopupWithImage(popupOpenFoto);

// const deletionCardForm = new PopupWithDeletion(popupDeletionCard);

// const avatarUpdatePopup = new PopupWithForm(popupUpdateAvatar, updateAvatarHandler);
// avatarUpdatePopup.setEventListeners();

// avatarElement.addEventListener('click', () => {
//   avatarEditForm.resetValidation();
//   avatarUpdatePopup.openPopup();
// });





// //Обработчик нажатия на "карточку".
// const handleCardClick = (name, link) => {
//   popupWithImage.openPopup(name, link);
// };

// //Создание новой карточки
// const createCard = (formData) => {
//   const card = new Card({ data: formData, handleCardClick }, templateCard);
//   return card.generateCard();
// }

// //Попап редактировния профиля. Обработчик нажатия на кнопку "редактирования".


// const popupEditProfileOpened = new PopupWithForm({
//   popupSelector: popupEditProfile,
//   handleFormSubmit: (formData) => {
//     userInfo.setUserInfo(formData);
//   },
// });

// editButton.addEventListener('click', () => {
//   const { name, job } = userInfo.getUserInfo();
//   popupEditProfileOpened.openPopup();
//   popupEditProfileOpened.setInputValues({ name, job });
//   profileEditForm.resetValidation();

// });

// //попап добавления карточки. Обработчик нажатия на кнопку "добавления".

// const classPopupAddCard = new PopupWithForm({
//   popupSelector: popupNewFoto,
//   handleFormSubmit: (formData) => {
//     const card = createCard(formData);
//     cardList.setItem(card);
//   },
// });

// buttonNewCard.addEventListener('click', () => {
//   popupNewFotoForm.reset();
//   addCardForm.cleanUpForm();
//   classPopupAddCard.openPopup();
// });



// //Создание карточек из базового массива.
// const cardList = new Section({
//   items: initialCards,
//   renderer: (item) => {
//     const card = createCard(item);
//     cardList.setItem(card);
//   }
// },
//   containerSelector);
// cardList.renderItems();

// // Promise.all([api.getUser(), api.getCards()])
// //   .then(([user, cards]) => {
// //     user.setUserInfo(user);
// //     console.dir(user);
// //     cardList.renderItems(cards);
// //   })
// //   .catch((err) => {
// //     console.log(`Ошибка: ${err}`);
// //   })