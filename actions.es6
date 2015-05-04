import { Actions } from 'flummox';
import { CardRecord } from './records';

export default class FeedActions extends Actions {
  loadCards(cards) {
    return cards.map(card => new CardRecord(card));
  }
}
