export class UserInfo {
  constructor(profileName, profileJob) {
    this._profileName = profileName
    this._profileJob = profileJob
    console.log('1')
  }

  getUserInfo() {
    return { name: this._profileJob.textContent, job: this._profileName.textContent }
  }

  setUserInfo([inputName, inputJob]) {
    this._profileJob.textContent = inputJob;
    this._profileName.textContent = inputName;
  }


}