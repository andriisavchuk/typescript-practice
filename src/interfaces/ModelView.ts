export interface ModelView {
  on(eventName: string, callback: () => void): void;
}
