export class UserInfo {
  constructor(profileName, profileJob) {
    this._profileName = profileName
    this._profileJob = profileJob
  }

  getUserInfo() {
    return { name: this._profileJob.textContent, job: this._profileName.textContent }
  }

  setUserInfo(formData) {
    this._profileJob.textContent = formData.inputJob;
    this._profileName.textContent = formData.inputName;
  }


}