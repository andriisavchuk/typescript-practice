import { User } from './models/User';

const user = new User({ name: 'John Doe', age: 35 });

user.on('click', () => {
  console.log('Click triggered');
});
user.on('enter', () => {
  console.log('Enter triggered');
});

user.trigger('click');

console.log(user);
