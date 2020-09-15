import { View } from './View';
import { User } from '../models/User';
import { UserProps } from '../interfaces/UserProps';

export class UserEdit extends View<User, UserProps> {
  generateTemplate(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
  }
}
