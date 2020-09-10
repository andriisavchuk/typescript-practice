import axios, { AxiosResponse } from 'axios';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  getProp(prop: string): string | number {
    return this.data[prop];
  }

  setProp(update: UserProps) {
    // @ts-ignore
    this.data = Object.assign(this.data, update);
  }

  on(event: string, callback: Callback) {
    const handlers = this.events[event] || [];
    handlers.push(callback);
    this.events[event] = handlers;
  }

  trigger(event: string): void {
    const handlers = this.events[event];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  }

  getUser(): void {
    axios
      .get(`http://localhost:3000/users/${this.getProp('id')}`)
      .then((res: AxiosResponse): void => {
        this.setProp(res.data);
      });
  }

  saveUser(): void {
    const id = this.getProp('id');

    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post('http://localhost:3000/users', this.data);
    }
  }
}
