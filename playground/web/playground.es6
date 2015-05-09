import * as Flummox from 'flummox';
import * as PanelsFeed from '../../index';
import { Container as FeedContainer } from '../../web';
import DUMMY_DATA from '../dummy-data';
import FluxComponent from 'flummox/component/web';
import Immutable from 'immutable';
import React from 'react';
import TYPES from './types';

const flux = new PanelsFeed.App();
const feedActions = flux.getActions('feed');
feedActions.loadFeeds(DUMMY_DATA);
feedActions.loadTypes(TYPES);

React.render(
  <FluxComponent flux={flux}>
    <FeedContainer id='properties' />
    <FeedContainer id='boxhouse' />
  </FluxComponent>,
  document.getElementById('playground-container')
);

let Playground = {
  flux,
  Flummox,
  FluxComponent,
  Immutable,
  PanelsFeed,
  React
};
window.Playground = Playground;

console.log('Welcome to panels-feed playground.');
console.log('https://feed.usepanels.com');
console.log('Playground module', Playground);
