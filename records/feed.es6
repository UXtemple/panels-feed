import { List, Record } from 'immutable';

export default class FeedRecord extends Record({
  id: undefined,
  cards: List()
}) {};
