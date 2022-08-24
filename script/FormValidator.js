export class FormValidator {
  constructor(config, formSelector) {
    this._form = formSelector
    this._inputSelector = config.inputSelector
    this._submitButtonSelector = config.submitButtonSelector
    this._inactiveButtonClass = config.inactiveButtonClass
    this._inputErrorClass = config.inputErrorClass
    this._errorClass = config.errorClass
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
  _toggleButtonState(inputList, saveButton) {
    if (this._hasInvalidInput(inputList)) {
      saveButton.classList.add(this._inactiveButtonClass);
      saveButton.disabled = true;
    } else {
      saveButton.classList.remove(this._inactiveButtonClass);
      saveButton.disabled = false;
    }
  }

  //включает валидацию форм
  enableValidation() {
    const inputList = Array.from(this._form.querySelectorAll(`.${this._inputSelector}`));
    const saveButton = this._form.querySelector(`.${this._submitButtonSelector}`);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, saveButton);
      });
    });
    this._toggleButtonState(inputList, saveButton);
  }

  //сброс валидации
  cleanUpForm() {
    const inputList = Array.from(this._form.querySelectorAll(`.${this._inputSelector}`));
    const saveButton = this._form.querySelector(`.${this._submitButtonSelector}`);
    inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    });
    this._toggleButtonState(inputList, saveButton);
  }
}

