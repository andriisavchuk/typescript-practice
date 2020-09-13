import { Model } from './Model';
import { UserProps } from '../interfaces/UserProps';
import { Attributes } from './Attributes';
import { Events } from './Events';
import { Api } from './Api';
import { rootUrl } from '../config/config';

export class User extends Model<UserProps> {
  static createUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Events(),
      new Api<UserProps>(rootUrl)
    );
  }
}
