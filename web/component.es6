import React from 'react';
import CardRecord from '../records/card';

export default class Feed extends React.Component {
  render() {
    let cards = this.props.cards.map(card => <div>{JSON.stringify(card)}</div>);

    return <div>{cards}</div>;
  }
}

Feed.propTypes = {
  cards: React.PropTypes.arrayOf(CardRecord)
}
Feed.defaultProps = {
  cards: []
}
