export class FormValidator {
  constructor(config, formSelector) {
    this._form = formSelector
    this._inputSelector = config.inputSelector
    this._submitButtonSelector = config.submitButtonSelector
    this._inactiveButtonClass = config.inactiveButtonClass
    this._inputErrorClass = config.inputErrorClass
    this._errorClass = config.errorClass
    this._inputList = Array.from(this._form.querySelectorAll(`.${this._inputSelector}`));
    this._saveButton = this._form.querySelector(`.${this._submitButtonSelector}`);
  }

  // Функция, которая добавляет класс с ошибкой
  _showError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = errorMessage;
  }
  // Функция, которая удаляет класс с ошибкой
  _hideError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
  }

  // Функция, которая проверяет валидность поля
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      const errorMessage = inputElement.validationMessage;
      this._showError(inputElement, errorMessage);
    } else {
      this._hideError(inputElement);
    }
  }

  // Проверка неверного ввода
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }


  // активация и деактивация кнопки
  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._saveButton.classList.add(this._inactiveButtonClass);
      this._saveButton.disabled = true;
    } else {
      this._saveButton.classList.remove(this._inactiveButtonClass);
      this._saveButton.disabled = false;
    }
  }

  //включает валидацию форм
  enableValidation() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
    this._toggleButtonState();
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement)
    });
  }

  //сброс валидации
  cleanUpForm() {
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    });
    this._toggleButtonState();
  }
}


