import React from 'react';

class Box extends React.Component {
  render() {
    return <div>Box {this.props.id}</div>;
  }
}

class Doc extends React.Component {
  render() {
    return <div>Doc {this.props.id}</div>;
  }
}

class Property extends React.Component {
  render() {
    return <div>Property {this.props.id}</div>;
  }
}

class WeatherReport extends React.Component {
  render() {
    return <div>WeatherReport {this.props.id}</div>;
  }
}

export default {
  Box,
  Doc,
  Property,
  WeatherReport
}
