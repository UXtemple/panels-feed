import { List } from 'immutable';
import { StateRecord } from './records';
import { Store } from 'flummox';

export default class FeedStore extends Store {
  static assignState(oldState, newState) {
    return newState;
  }

  constructor(flux) {
    super();

    const feedActionIds = flux.getActionIds('feed');
    this.register(feedActionIds.loadCards, this.loadCards);

    this.state = new StateRecord();
  }

  get cards() {
    return this.state.cards.toArray();
  }

  loadCards(cards) {
    this.setState(this.state.set('cards', List(cards)));
  }
}
