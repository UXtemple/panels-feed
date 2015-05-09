import * as Flummox from 'flummox';
import * as PanelsFeed from '../../index';
import { Container as FeedContainer } from '../../ios';
import DUMMY_DATA from '../dummy-data';
import FluxComponent from 'flummox/component/native';
import Immutable from 'immutable';
import React from 'react-native';
import TYPES from './types';

const { AppRegistry, Text, View } = React;
const flux = new PanelsFeed.App();
const feedActions = flux.getActions('feed');
feedActions.loadFeeds(DUMMY_DATA);
feedActions.loadTypes(TYPES);

class PlaygroundComponent extends React.Component {
  render() {
    return (
      <View style={{marginTop: 25, marginLeft: 50}}>
        <FluxComponent flux={flux}>
          <FeedContainer id='properties' />
          <FeedContainer id='boxhouse' />
        </FluxComponent>
      </View>
    );
  }
}

AppRegistry.registerComponent('Playground', () => PlaygroundComponent);

let Playground = {
  flux,
  FeedContainer,
  Flummox,
  FluxComponent,
  Immutable,
  PanelsFeed,
  PlaygroundComponent,
  React
};
window.Playground = Playground;

console.log('Welcome to panels-feed playground.');
console.log('https://feed.usepanels.com');
console.log('Playground module', Playground);
