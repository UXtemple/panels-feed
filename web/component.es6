import CardRecord from '../records/card';
import React from 'react';

export default class Feed extends React.Component {
  render() {
    let cards = this.props.cards.map((card) => {
      const Type = this.props.types.get(card.type);
      return <Type key={card.id} id={card.id} />;
    });

    return <div>{cards.toArray()}</div>;
  }
}

Feed.propTypes = {
  cards: React.PropTypes.arrayOf(CardRecord),
  types: React.PropTypes.objectOf(React.PropTypes.element)
}

Feed.defaultProps = {
  cards: [],
  types: {}
}
