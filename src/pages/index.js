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
  popupOpenFoto, profileJob, profileName, templateCard, avatarElement, popupDeletionCard, popupUpdateAvatar, cardsContainer,
} from '../utils/helpers.js';
import { config } from '../utils/helpers.js';
import { initialCards } from '../utils/helpers.js';

const userInfo = new UserInfo({
  profileName: profileName,
  profileJob: profileJob,
  avatarElement: avatarElement
});

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-50');

const profileEditForm = new FormValidator(config, popupFormProfile);
profileEditForm.enableValidation();

const addCardForm = new FormValidator(config, popupNewFoto);
addCardForm.enableValidation();

const deletionCardForm = new PopupWithDeletion(popupDeletionCard);




// Работа с попапом карточки
const popupWithImage = new PopupWithImage(popupOpenFoto);
const handlerCardClick = (name, link) => {
  popupWithImage.openPopup(name, link);
};


// Работа с карточками
const deleteCardHendler = (card) => {
  api.deleteCard(card.getId())
    .then(() => {
      card.removeCard();
    })
    .catch((err) => {
      console.log(err);
    })
}

const handleCardLike = (cardId, isLiked, setLikesCallback) => {
  console.log('handleCardLike');
  console.dir(isLiked);
  api.toggleLike(cardId, isLiked)
    .then(({ likes }) => setLikesCallback(likes))
    .catch((err) => {
      console.log(err);
    })
}

const createCard = (item) => {
  console.dir(userInfo.getUserId());
  const card = new Card(item, userInfo.getUserId(), templateCard,
    {
      openViewHandler: handlerCardClick,
      deleteCardHendler,
      cardLikeHendler: handleCardLike,
    });
  const cardElement = card.generateCard();
  return cardElement;
};

const cardList = new Section({ renderer: createCard }, cardsContainer);



// Работа с аватаром
const updateAvatarHandler = (data) => {
  api.updateAvatar(data.link)
    .then(userInfo.setUserInfo)
    .catch((err) => {
      console.dir(err);
    })
};

const avatarEditForm = new FormValidator(config, popupUpdateAvatar);
avatarEditForm.enableValidation();

const avatarUpdatePopup = new PopupWithForm(popupUpdateAvatar, updateAvatarHandler);
avatarUpdatePopup.setEventListeners();

avatarElement.addEventListener('click', () => {
  avatarEditForm.resetValidation();
  avatarUpdatePopup.openPopup();
});


//Работа с добавлением попапа карточки
const addCardHandler = (item) => {
  api.addCardHandler(item.newPlace, itemlinkPlace)
  .then((res)=>{
    cardList.setItem(createCard(res));
  })
  .catch((err) => {
    console.log(err);
  });
const popupAddCard = new PopupWithForm(popupNewFoto, addCardHandler);
popupAddCard.setEventListeners();


}

//
Promise.all([api.getUser(), api.getCards()])
  .then(([user, cards]) => {
    userInfo.setUserInfo(user);
    cardList.renderItems(cards);
  })
  .catch((err) => {
    console.log(`Ошибка Promise.all: ${err}`);
  });