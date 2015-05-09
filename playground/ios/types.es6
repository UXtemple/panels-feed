import React from 'react-native';
let { Text } = React;

class Box extends React.Component {
  render() {
    return <Text>Box {this.props.id}</Text>;
  }
}

class Doc extends React.Component {
  render() {
    return <Text>Doc {this.props.id}</Text>;
  }
}

class Property extends React.Component {
  render() {
    return <Text>Property {this.props.id}</Text>;
  }
}

class WeatherReport extends React.Component {
  render() {
    return <Text>WeatherReport {this.props.id}</Text>;
  }
}

export default {
  Box,
  Doc,
  Property,
  WeatherReport
}
