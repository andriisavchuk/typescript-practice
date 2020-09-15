import { View } from './View';
import { User } from '../models/User';
import { UserProps } from '../interfaces/UserProps';

export class UserShow extends View<User, UserProps> {
  generateTemplate(): string {
    return `
      <div>
        <h1>User Details</h1>        
        <div>User Name: ${this.model.getProp('name')}</div>
        <div>User Age: ${this.model.getProp('age')}</div>
      </div>    
    `;
  }
}
