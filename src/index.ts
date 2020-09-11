import { User, UserProps } from './models/User';

const userObj: UserProps = {
  name: 'Ivan',
  age: 35,
};

const user = new User(userObj);
