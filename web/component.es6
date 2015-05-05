import CardRecord from '../records/card';
import React from 'react';

export default class Feed extends React.Component {
  render() {
    let cards = this.props.cards.map(card => <div key={card.id}>{JSON.stringify(card)}</div>);

    return <div>{cards}</div>;
  }
}

Feed.propTypes = {
  cards: React.PropTypes.arrayOf(CardRecord)
}
Feed.defaultProps = {
  cards: []
}
