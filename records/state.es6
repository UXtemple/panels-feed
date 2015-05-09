import { Map, Record } from 'immutable';

export default class StateRecord extends Record({
  feeds: Map(),
  types: Map()
}) {};
