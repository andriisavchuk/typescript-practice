import axios, { AxiosPromise } from 'axios';
import { HasId } from '../interfaces/HasId';

export class Api<T extends HasId> {
  constructor(public rootUrl: string) {}

  get(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
