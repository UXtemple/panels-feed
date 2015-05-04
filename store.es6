import { Store } from 'flummox';
import { State } from './records';

class FeedStore extends Store {
  static assignState(oldState, newState) {
    return newState;
  }

  constructor(flux) {
    super();

    const feedActionIds = flux.getActionIds('feed');
    this.register(feedActionIds.loadCards, this.loadCards);

    this.state = new State();
  }

  get cards() {
    return this.state.cards.toArray();
  }

  loadCards(cards) {
    this.setState(this.state.set('cards', cards));
  }
}
