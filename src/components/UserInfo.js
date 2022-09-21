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

  setUserInfo({ name, about, avatar, _id }) {
    this._name = name;
    this._about = about;
    this._avatar = avatar;
    this._id = _id;
    this._profileJob.textContent = about;
    this._profileName.textContent = name;
    this._avatarElement.style.background = `url(${avatar})`;
  }

  getUserAvatar() {
    return {
      avatar: this._avatar,
    }
  }


  getUserId() {
    return this._id;

  }
}