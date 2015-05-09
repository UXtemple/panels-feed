import DUMMY_DATA from '../dummy-data';
import * as Flummox from 'flummox';
import FluxComponent from 'flummox/component';
import * as PanelsFeed from '../../index';
import { Container as FeedContainer } from '../../web';
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

class BoxCard extends React.Component {
  render() {
    return <div>BoxCard {this.props.id}</div>;
  }
}

class Property extends React.Component {
  render() {
    return <div>Property {this.props.id}</div>;
  }
}

class WeatherReport extends React.Component {
  render() {
    return <div>WeatherReport {this.props.id}</div>;
  }
}

const TYPES = {
  BoxCard,
  Property,
  WeatherReport
}

const flux = new PanelsFeed.App();
const feedActions = flux.getActions('feed');
feedActions.loadCards(DUMMY_DATA);
feedActions.loadTypes(TYPES);

React.render(
  <FluxComponent flux={flux}>
    <FeedContainer />
  </FluxComponent>,
  document.getElementById('playground-container')
);
