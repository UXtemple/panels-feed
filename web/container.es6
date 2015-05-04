import Component from './component';
import FluxComponent from 'flummox/component';

export default class FeedContainer extends React.Component {
  get stores() {
    return {
      feed: store => ({cards: store.cards})
    };
  }

  render() {
    return <FluxComponent connectToStores={this.stores}><Component /></FluxComponent>;
  }
}
