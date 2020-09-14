import axios, { AxiosResponse } from 'axios';
import { Events } from './Events';

export class Collection<T, K> {
  models: T[] = [];
  events: Events = new Events();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((res: AxiosResponse) => {
      res.data.forEach((val: K) => {
        this.models.push(this.deserialize(val));
      });

      this.trigger('change');
    });
  }
}
