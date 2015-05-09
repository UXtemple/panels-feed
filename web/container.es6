import Component from './component';
import FluxComponent from 'flummox/component/web';
import React from 'react';

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

FeedContainer.propTypes = {
  id: React.PropTypes.string.isRequired
}
