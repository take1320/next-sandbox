// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as Redux from 'redux';

declare module 'redux' {
  export interface Store {
    sagaTask: any;
  }
}
