import CardRecord from '../records/card';
let React = require('react-native');
let { Text, ScrollView } = React;

export default class Feed extends React.Component {
  render() {
    let cards = this.props.cards.map(card => <Text>{JSON.stringify(card)}</Text>);

    return <ScrollView>{cards}</ScrollView>;
  }
}

Feed.propTypes = {
  cards: React.PropTypes.arrayOf(CardRecord)
}
Feed.defaultProps = {
  cards: []
}
