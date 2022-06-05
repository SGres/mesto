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
  console.dir(errorElement);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorSelector);
  inputElement.classList.add(inputErrorModif);
};

const hideInputError = (formElement, inputElement, inputErrorModif, errorSelector) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.remove(errorSelector);
  inputElement.classList.remove(inputErrorModif);
  errorElement.textContent = '';
}

const checkInputValidity = (formElement, inputElement, inputErrorModif, errorSelector) => {
  console.dir(inputElement);
  console.log(`input element validity: ${inputElement.validity.valid}`);
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMassage, inputErrorModif, errorSelector);
  } else {
    hideInputError = (formElement, inputElement, inputErrorModif, errorSelector);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputelement) => {
    return !inputelement.validity.valid;
  });
};

const toggleButtonState = (inputList, savebutton, disabledSelector) => {
  if (hasInvalidInput(inputList)) {
    savebutton.classList.add(disabledSelector);
    savebutton.disabledSelector = true;
  } else {
    savebutton.classList.remove(disabledSelector);
    savebutton.disabledSelector = false;
  }
};

const setEventListeners = (formElement, elementValid) => {
  const { inputSelector, submitButtonSelector, inputErrorClass, errorClass, inactiveButtonClass } = elementValid;
  const inputList = Array.from(formElement.querySelectorAll(`.${inputSelector}`));
  const savebutton = formElement.querySelector(`.${submitButtonSelector}`);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      console.log('Работает текст');
      checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
      toggleButtonState(inputElement, savebutton, inactiveButtonClass);
    });
  });
};

const enableValidation = (confVali) => {
  const { formSelector } = confVali;
  const formList = Array.from(document.querySelectorAll(`.${formSelector}`));
  formList.forEach((formElement) => {
    console.dir(formElement);
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, confVali);
  });
};

enableValidation(config);
