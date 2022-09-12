import { Popup } from "./Popup.js";
import { FormValidator } from "./FormValidator.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  openPopup() {
    super.openPopup();
  }
}
