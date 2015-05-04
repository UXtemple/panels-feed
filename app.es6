import Actions from './actions';
import { Flux } from 'flummox';
import Store from './store';

class AppFlux extends Flux {
  constructor() {
    super();

    this.createActions('feed', Actions);
    this.createStore('feed', Store, this);
  }
}
