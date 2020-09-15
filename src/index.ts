import { UserForm } from './ui/UserForm';
import { User } from './models/User';
import { UserEdit } from './ui/UserEdit';

const user = User.createUser({ name: 'John Doe', age: 38 });

const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();

  console.log(userEdit);
} else {
  throw new Error('Root element not found');
}
