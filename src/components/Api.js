export class Api {
  constructor(url) {
    this._url = url;
    this._headers = {
      authorization: '521e950a-472e-4425-9704-61d8c5e8008c',
      'Content-Type': 'application/json',
    }
  }

  _checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Возникла ошибка!: ${res.status}`);

  }

  getCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  getUser() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  editUserInfo(firstname, work) {
    const body = {
      name: firstname,
      about: work
    };
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify(body)
    })
      .then(this._checkResponse)
  }

  addCard(newPlace, linkPlace) {
    const body = {
      name: newPlace,
      link: linkPlace
    }
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify(body)
    })
      .then(this._checkResponse)
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      headers: this._headers,
      method: 'DELETE'
    })
      .then(this._checkResponse)
  }

  toggleLike(cardId, isLiked) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      headers: this._headers,
      method: isLiked ? 'DELETE' : 'PUT'
    })
      .then(this._checkResponse)
  }

  deleteLike() {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      headers: this._headers,
      method: 'DELETE'
    })
      .then(this._checkResponse)
  }

  updateAvatar(avatarLink) {
    const body = {
      avatar: avatarLink
    };
    return fetch(`${this._url}/users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify(body)
    })
      .then(this._checkResponse)
  }
}