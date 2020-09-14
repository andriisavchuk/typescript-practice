export class UserForm {
  constructor(public parent: Element) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onMouseEnter,
    };
  }

  onButtonClick(): void {
    console.log('button is clicked');
  }

  onMouseEnter(): void {
    console.log('mouse entered');
  }

  generateTemplate(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input type="text">
        <button>Click</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((elemetn) => {
        elemetn.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.generateTemplate();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
