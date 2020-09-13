export interface Events {
  on(event: string, callback: () => void): void;
  trigger(event: string): void;
}
