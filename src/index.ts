import { User, UserProps } from './models/User';

const userObj: UserProps = {
  name: 'Andy',
  age: 19,
};

const user = new User(userObj);

user.on('save', () => {
  console.log(user);
});

user.save();
