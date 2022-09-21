export class UserInfo {
  constructor({ profileName, profileJob, avatarElement }) {
    this._profileName = profileName;
    this._profileJob = profileJob;
    this._avatarElement = avatarElement;
    this.getUserInfo = this.getUserInfo.bind(this);
    this.setUserInfo = this.setUserInfo.bind(this);
  }

  getUserInfo() {
    return {
      name: this._profileJob.textContent,
      job: this._profileName.textContent,
    }
  }

  setUserInfo({ inputJob, inputName, avatar, _id }) {
    this._inputJob = inputJob;
    this._inputName = inputName;
    this._avatar = avatar;
    this._id = _id;
    this._profileJob.textContent = inputJob;
    this._profileName.textContent = inputName;
    this._avatarElement.style.backgraundImage = `url(${avatar})`;
  }

  getUserAvatar() {
    return {
      avatar: this._avatar,
    }
  }


  getUserId() {
    return {
      _id: this._id,
    }
  }
}