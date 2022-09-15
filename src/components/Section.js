export class Section {
  //отрисовка элементов
  constructor({ items, renderer }, containerSelector) {
    this._containerSelector = containerSelector;
    this._items = items;
    this._renderer = renderer;
  }

  //отрисовка всех элементов
  renderItems() {
    this._items.forEach(item => this._renderer(item));
  }
  //принимаем dom-элемент и добавляем в контейнер
  setItem(element) {
    this._containerSelector.prepend(element);
  }
}
