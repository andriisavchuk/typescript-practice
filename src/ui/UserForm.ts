import { View } from './View';
import { User } from '../models/User';
import { UserProps } from '../interfaces/UserProps';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-user': this.onSaveClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;
    }

    this.model.set({ name });
  };

  onSaveClick = (): void => {
    this.model.save();
  };

  generateTemplate(): string {
    return `
      <div>        
        <input type="text" placeholder="${this.model.getProp('name')}">
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-user">Save User</button>
      </div>
    `;
  }
}
