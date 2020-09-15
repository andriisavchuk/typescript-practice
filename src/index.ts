import { User } from './models/User';
import { UserView } from './ui/UserView';

const user = User.createUser({ name: 'John Doe', age: 38 });

const root = document.getElementById('root');

if (root) {
  const userView = new UserView(root, user);
  userView.render();
} else {
  throw new Error('Root element not found');
}
