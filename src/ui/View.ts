import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
  layout: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract generateTemplate(): string;

  layoutMap(): { [key: string]: string } {
    return {};
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  mapLayout(fragment: DocumentFragment): void {
    const layoutMap = this.layoutMap();

    for (let key in layoutMap) {
      const selector = layoutMap[key];
      const element = fragment.querySelector(selector);

      if (element) {
        this.layout[key] = element;
      }
    }
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.generateTemplate();

    this.bindEvents(templateElement.content);
    this.mapLayout(templateElement.content);

    this.onRender();

    this.parent.append(templateElement.content);
  }
}
