import CardRecord from '../records/card';
let React = require('react-native');
let { View } = React;

export default class Feed extends React.Component {
  render() {
    let cards = this.props.cards.map((card) => {
      const Type = this.props.types.get(card.type);
      return <Type key={card.id} id={card.id} />;
    });

    return <View>{cards.toArray()}</View>;
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
