import { List, Map } from 'immutable';
import { CardRecord, FeedRecord, StateRecord } from './records';
import { Store } from 'flummox';

export default class FeedStore extends Store {
  static assignState(oldState, newState) {
    return newState;
  }

  constructor(flux) {
    super();

    const feedActionIds = flux.getActionIds('feed');
    this.register(feedActionIds.loadCards, this.loadCards);
    this.register(feedActionIds.loadFeeds, this.loadFeeds);
    this.register(feedActionIds.loadTypes, this.loadTypes);

    this.state = new StateRecord();
  }

  // Cards are things shown in a feed
  cards(feedId) {
    return this.state.feeds.has(feedId) ? this.state.feeds.get(feedId).cards : Map();
  }
  loadCards({cards, feedId}) {
    const newFeed = this.state.feeds.get(feedId) || new FeedRecord();
    this.setState(this.state.feeds.set(feedId, newFeed.set('cards', this.parseCards(cards))));
  }
  parseCards(cards) { return List(cards.map(card => new CardRecord(card))); }

  // Feeds are lists of cards. They can show many different types of cards.
  get feeds() { return this.state.feeds; }
  loadFeeds({feeds}) {
    this.setState(this.state.set('feeds', this.parseFeeds(feeds)));
  }
  parseFeeds(feeds) {
    let newFeeds = {};
    feeds.forEach(feed => newFeeds[feed.id] = new FeedRecord({
      cards: this.parseCards(feed.cards),
      id: feed.id
    }));
    return Map(newFeeds);
  }

  // Types are the cards' components
  get types() { return this.state.types; }
  loadTypes({types}) { this.setState(this.state.set('types', Map(types))); }
}
