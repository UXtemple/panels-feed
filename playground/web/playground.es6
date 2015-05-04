import DUMMY_DATA from '../../dummy-data';
import * as Flummox from 'flummox';
import FluxComponent from 'flummox/component';
import * as PanelsFeed from '../../';
import React from 'react';

let Playground = {
  Flummox,
  FluxComponent,
  PanelsFeed,
  React
};
window.Playground = Playground;

console.log('Welcome to panels-feed playground.');
console.log('https://feed.usepanels.com');
console.log('Playground module', Playground);

const FeedContainer = PanelsFeed.web.Container;
const flux = new PanelsFeed.App();

flux.getActions('feed').loadCards(DUMMY_DATA);

React.render(
  <FluxComponent flux={flux}>
    <FeedContainer />
  </FluxComponent>,
  document.getElementById('playground-container')
);
