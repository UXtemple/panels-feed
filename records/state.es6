import { Record, List } from 'immutable';

export default class StateRecord extends Record({
  cards: List()
});
