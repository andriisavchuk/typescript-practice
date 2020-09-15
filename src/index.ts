import { UserForm } from './ui/UserForm';
import { User } from './models/User';

const user = User.createUser({ name: 'John Doe', age: 38 });

const root = document.getElementById('root');

if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw new Error('Root element not found');
}
