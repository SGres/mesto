export class Section {
  //отрисовка элементов
  constructor({ renderer }, containerSelector) {
    this._containerSelector = containerSelector;
    this._renderer = renderer;
  }

  //отрисовка всех элементов
  renderItems(items) {
    items.reverse().forEach(item => this.setItem(item));
  }
  //принимаем dom-элемент и добавляем в контейнер
  setItem(card) {
    this._containerSelector.prepend(this._renderer(card));
  }
}
