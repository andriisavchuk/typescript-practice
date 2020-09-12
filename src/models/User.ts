import { Events } from './Events';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { AxiosResponse } from 'axios';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  public events: Events = new Events();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(attr: UserProps) {
    this.attributes = new Attributes<UserProps>(attr);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get getProp() {
    return this.attributes.getProp;
  }

  set(update: UserProps) {
    this.attributes.setProp(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.getProp('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch data without an id');
    }

    this.sync.get(id).then((res: AxiosResponse): void => {
      this.set(res.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAllProps())
      .then((res: AxiosResponse) => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}
