import Component from './component';
import FluxComponent from 'flummox/component/native';
import React from 'react-native';

export default class FeedContainer extends React.Component {
  get stores() {
    return {
      feed: store => ({
        cards: store.cards(this.props.id),
        types: store.types
      })
    };
  }

  render() {
    return <FluxComponent connectToStores={this.stores}><Component /></FluxComponent>;
  }
}
