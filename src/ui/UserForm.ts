export class UserForm {
  constructor(public parent: Element) {}

  generateTemplate(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input type="text">
      </div>
    `;
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.generateTemplate();

    this.parent.append(templateElement.content);
  }
}
