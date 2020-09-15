import { UserProps } from '../interfaces/UserProps';
import { View } from './View';
import { User } from '../models/User';
import { UserShow } from './UserShow';
import { UserForm } from './UserForm';

export class UserEdit extends View<User, UserProps> {
  layoutMap(): { [p: string]: string } {
    return {
      userShow: '.user-show',
      userForm: '.user-form',
    };
  }

  onRender(): void {
    new UserShow(this.layout.userShow, this.model).render();
    new UserForm(this.layout.userForm, this.model).render();
  }

  generateTemplate(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
  }
}
