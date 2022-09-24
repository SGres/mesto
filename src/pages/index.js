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
  buttonNewCard, profileEditButton, popupEditProfile, popupNewFoto, popupOpenFoto, profileAbout, profileName,
  templateCard, avatarElement, popupDeletionCard, popupUpdateAvatar, сontainerForCards, buttonCaptions,
  confirmDeleteButtonCaptions, config, inputNameProfile, inputAboutProfile
} from '../utils/helpers.js';


// Экземпляры классов
const userInfo = new UserInfo({
  profileName: profileName,
  profileAbout: profileAbout,
  avatarElement: avatarElement
});

//
const api = new Api('https://mesto.nomoreparties.co/v1/cohort-50');


// Работа с попапом изменения данных профиля

const editUserInfoHandler = (data, toggleButtonCaptionCallback, closePopupCallback) => {
  toggleButtonCaptionCallback(true);
  api.editUserInfo(data.inputName, data.inputJob)
    .then((res) => {
      userInfo.setUserInfo(res);
      closePopupCallback();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      toggleButtonCaptionCallback(false);
    })
};

const profileEditForm = new FormValidator(config, popupEditProfile);

profileEditForm.enableValidation();

const popupEditProfileopen = new PopupWithForm(popupEditProfile, editUserInfoHandler, buttonCaptions);

profileEditButton.addEventListener('click', () => {
  profileEditForm.resetValidation();
  const currentProfileData = userInfo.getUserInfo();
  inputNameProfile.value = currentProfileData.name;
  inputAboutProfile.value = currentProfileData.about;
  popupEditProfileopen.openPopup();
});


// Работа с попапом карточки

const popupWithImage = new PopupWithImage(popupOpenFoto);

const handlerCardClick = (name, link) => {
  popupWithImage.openPopup(name, link);
};


// Работа с карточками

const handleDeleteConfirm = (cardId, removeCardCallback) => {
  deletionCardForm.openPopup(cardId, removeCardCallback);
};

const deleteCardHendler = (cardId, removeCardCallback, toggleButtonCaption, closePopupCallback) => {
  console.log(closePopupCallback);
  toggleButtonCaption(true)
  api.deleteCard(cardId)
    .then(() => {
      removeCardCallback();
      closePopupCallback();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      toggleButtonCaption(false);
    })
};

const deletionCardForm = new PopupWithDeletion(popupDeletionCard, deleteCardHendler, confirmDeleteButtonCaptions);

deletionCardForm.setEventListeners();

const handleCardLike = (cardId, isLiked, setLikesCallback) => {
  api.toggleLike(cardId, isLiked)
    .then(({ likes }) => setLikesCallback(likes))
    .catch((err) => {
      console.log(err);
    })
}

const createCard = (item) => {
  const card = new Card(item, userInfo.getUserId(), templateCard,
    {
      openViewHandler: handlerCardClick,
      deleteCardHendler: handleDeleteConfirm,
      cardLikeHendler: handleCardLike,
    });
  const cardElement = card.generateCard();
  return cardElement;
};

const cardList = new Section({ renderer: createCard }, сontainerForCards);


// Работа с аватаром
const updateAvatarHandler = (data, toggleButtonCaptionCallback, closePopupCallback) => {
  toggleButtonCaptionCallback(true);
  api.updateAvatar(data.link)
    .then((profile) => {
      userInfo.setUserInfo(profile)
      closePopupCallback();
    })
    .catch((err) => {
      console.dir(err);
    })
    .finally(() => {
      toggleButtonCaptionCallback(false);
    })
};

const avatarEditForm = new FormValidator(config, popupUpdateAvatar);
avatarEditForm.enableValidation();

const avatarUpdatePopup = new PopupWithForm(popupUpdateAvatar, updateAvatarHandler, buttonCaptions);
avatarUpdatePopup.setEventListeners();

avatarElement.addEventListener('click', () => {
  avatarEditForm.resetValidation();
  avatarUpdatePopup.openPopup();
});


//Работа с попапом добавлением карточки
const addCardForm = new FormValidator(config, popupNewFoto);
addCardForm.enableValidation();

const addCardHandler = (item, toggleButtonCaptionCallback, closePopupCallback) => {
  toggleButtonCaptionCallback(true);
  api.addCard(item.name, item.link)
    .then((res) => {
      cardList.setItem(res);
      closePopupCallback();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      toggleButtonCaptionCallback(false);
    })
}

const popupAddCard = new PopupWithForm(popupNewFoto, addCardHandler, buttonCaptions);
buttonNewCard.addEventListener('click', () => {
  addCardForm.resetValidation();
  popupAddCard.openPopup();
});

//
Promise.all([api.getUser(), api.getCards()])
  .then(([user, cards]) => {
    userInfo.setUserInfo(user);
    cardList.renderItems(cards);
    console.log(user);
  })
  .catch((err) => {
    console.log(`Ошибка Promise.all: ${err}`);
  });