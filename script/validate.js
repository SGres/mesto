const config = {
  formSelector: 'popup__form',
  inputSelector: 'popup__input',
  submitButtonSelector: 'popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

const showInputError = (formElement, inputElement, errorMessage, inputErrorModif, errorSelector) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  console.log(errorElement);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorSelector);
  inputElement.classList.add(inputErrorModif);
};

const hideInputError = (formElement, inputElement, inputErrorModif, errorSelector) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  console.log(errorElement);
  errorElement.classList.remove(errorSelector);
  inputElement.classList.remove(inputErrorModif);
  errorElement.textContent = '';
}

const checkInputValidity = (formElement, inputElement, inputErrorModif, errorSelector) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorModif, errorSelector);
  } else {
    hideInputError(formElement, inputElement, inputErrorModif, errorSelector);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};



const toggleButtonState = (formElement, submitButtonSelector, disabledSelector) => {
  const savebutton = formElement.querySelector(`.${submitButtonSelector}`);
  if (formElement.checkValidity()) {
    savebutton.classList.remove(disabledSelector);
    savebutton.disabled = false;
  } else {
    savebutton.classList.add(disabledSelector);
    savebutton.disabled = true;
  }
};

const setEventListeners = (formElement, elementValid) => {
  const { inputSelector, submitButtonSelector, inputErrorClass, errorClass, inactiveButtonClass } = elementValid;
  const inputList = Array.from(formElement.querySelectorAll(`.${inputSelector}`));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
      toggleButtonState(formElement, submitButtonSelector, inactiveButtonClass);
    });
  });
};

const enableValidation = (confVali) => {
  const { formSelector } = confVali;
  const formList = Array.from(document.querySelectorAll(`.${formSelector}`));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, confVali);
  });
};

enableValidation(config);

const abc = (formName, configForm) => {

  const { inputSelector, submitButtonSelector, inputErrorClass, errorClass, inactiveButtonClass } = configForm;
  toggleButtonState(formName, submitButtonSelector, inactiveButtonClass);
  const inputList = Array.from(formName.querySelectorAll(`.${inputSelector}`));
  inputList.forEach((inputElement) => {
    hideInputError(formName, inputElement, inputErrorClass, errorClass);
  });
};
