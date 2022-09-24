export class UserInfo {
  constructor({ profileName, profileAbout, avatarElement }) {
    this._profileName = profileName;
    this._profileAbout = profileAbout;
    this._avatarElement = avatarElement;
    this.getUserInfo = this.getUserInfo.bind(this);
    this.setUserInfo = this.setUserInfo.bind(this);
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about :this._profileAbout.textContent,
    }
  }

  setUserInfo({ name, about, avatar, _id }) {
    this._name = name;
    this._about = about;
    this._avatar = avatar;
    this._id = _id;
    this._profileAbout.textContent = about;
    this._profileName.textContent = name;
    this._avatarElement.style.background = `url(${avatar})`;
  }

  getUserId() {
    return this._id;
  }
}