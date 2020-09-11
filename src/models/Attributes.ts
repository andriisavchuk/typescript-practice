export class Attributes<T> {
  constructor(private data: T) {}

  getProp<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  setProp(update: T) {
    // @ts-ignore
    this.data = Object.assign(this.data, update);
  }
}
