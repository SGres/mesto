export class UserInfo {
  constructor({ profileName, profileAbout, avatarElement }) {
    this._profileName = document.querySelector(profileName);
    this._profileAbout = document.querySelector(profileAbout);
    this._avatarElement = avatarElement;
    this.getUserInfo = this.getUserInfo.bind(this);
    this.setUserInfo = this.setUserInfo.bind(this);
  }

  getUserInfo() {
    return {
      inputAbout: this._profileAbout.textContent,
      inputName: this._profileName.textContent,
    }
  }

  setUserInfo({ name, about, avatar, _id }) {
    this._name = name;
    this._about = about;
    this._avatar = avatar;
    this._id = _id;
    this._profileAbout.textContent = about;
    this._profileName.textContent = name;
    this._avatarElement.style = `background-image: url(${avatar})`;
  }

  getUserId() {
    return this._id;
  }
}