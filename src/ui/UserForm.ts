import { User } from '../models/User';

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  generateTemplate(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.getProp('name')}</div>
        <div>User age: ${this.model.getProp('age')}</div>
        <input type="text">
        <button>Click</button>
        <button class="set-age">Set random age</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll('.set-age').forEach((elemetn) => {
        elemetn.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.generateTemplate();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
