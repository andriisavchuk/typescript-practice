import { AxiosPromise } from 'axios';

export interface Sync<T> {
  get(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}
