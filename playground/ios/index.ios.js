/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var DUMMY_DATA = require('panels-feed/dummy-data');
var Flummox = require('flummox');
var FluxComponent = require('flummox/native-component');
var PanelsFeed = require('panels-feed');
var React = require('react-native');
var {
  AppRegistry,
  View
} = React;

var Playground = {
  Flummox,
  FluxComponent,
  PanelsFeed,
  React
};

console.log('Welcome to panels-feed playground.');
console.log('https://feed.usepanels.com');
console.log('Playground module', Playground);

var FeedContainer = require('panels-feed/ios/container');
var flux = new PanelsFeed.App();

flux.getActions('feed').loadCards(DUMMY_DATA);

class PlaygroundComponent extends React.Component {
  render() {
    return (
      <View>
        <FluxComponent flux={flux}>
          <FeedContainer />
        </FluxComponent>
      </View>
    );
  }
}

AppRegistry.registerComponent('Playground', () => PlaygroundComponent);
