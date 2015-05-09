import { Actions } from 'flummox';
import { CardRecord } from './records';

export default class FeedActions extends Actions {
  loadCards(cards, feedId) {
    return {
      cards,
      feedId
    };
  }

  loadFeeds(feeds) {
    return { feeds };
  }

  loadTypes(types) {
    return { types };
  }
}
