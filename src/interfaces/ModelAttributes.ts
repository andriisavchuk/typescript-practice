export interface ModelAttributes<T> {
  getProp<K extends keyof T>(key: K): T[K];
  getAllProps(): T;
  setProp(value: T);
}
