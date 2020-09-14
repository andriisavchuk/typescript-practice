import { rootUrl } from '../config/config';
import { Model } from './Model';
import { UserProps } from '../interfaces/UserProps';
import { Attributes } from './Attributes';
import { Events } from './Events';
import { Api } from './Api';
import { Collection } from './Collection';

export class User extends Model<UserProps> {
  static createUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Events(),
      new Api<UserProps>(rootUrl)
    );
  }

  static createUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
      User.createUser(json)
    );
  }
}
