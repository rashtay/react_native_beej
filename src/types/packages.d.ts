/* This file is to declare third packages incompatible with typescript */
declare module 'remote-redux-devtools';
declare interface NodeModule {
  hot: {
    accept(path: string, fn: () => void, callback?: () => void): void;
  };
}
