import { UserForm } from './ui/UserForm';
import { User } from './models/User';

const user = User.createUser({ name: 'John Doe', age: 38 });
const userForm = new UserForm(document.getElementById('root'), user);

userForm.render();
