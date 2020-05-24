import { observable } from 'mobx';

export default class HomeStore {
  @observable
  value: number = 1;
}
