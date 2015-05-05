import DUMMY_DATA from '../../dummy-data';
import * as Flummox from 'flummox';
import FluxComponent from 'flummox/native-component';
import * as PanelsFeed from '../../index';
import React from 'react-native';

let Playground = {
  Flummox,
  FluxComponent,
  PanelsFeed,
  React
};

console.log('Welcome to panels-feed playground.');
console.log('https://feed.usepanels.com');
console.log('Playground module', Playground);

const FeedContainer = PanelsFeed.ios.Container;
const flux = new PanelsFeed.App();

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
