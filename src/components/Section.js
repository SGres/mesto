export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._containerElement = document.querySelector(containerSelector);
  }

  //отрисовка всех элементов
  renderItems(items) {
    items.reverse().forEach(item => {
      this.setItem(item)
    });
  }
  //принимаем dom-элемент и добавляем в контейнер
  setItem(card) {
    this._containerElement.prepend(this._renderer(card));
  }
}
