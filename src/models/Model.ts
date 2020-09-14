import { AxiosResponse } from 'axios';
import { ModelAttributes } from '../interfaces/ModelAttributes';
import { Events } from '../interfaces/Events';
import { Sync } from '../interfaces/Sync';
import { HasId } from '../interfaces/HasId';

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get getProp() {
    return this.attributes.getProp;
  }

  set(update: T) {
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
