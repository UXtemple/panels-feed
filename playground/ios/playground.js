(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _import = require('flummox');

var Flummox = _interopRequireWildcard(_import);

var _import2 = require('../../index');

var PanelsFeed = _interopRequireWildcard(_import2);

var _FeedContainer = require('../../ios');

var _DUMMY_DATA = require('../dummy-data');

var _DUMMY_DATA2 = _interopRequireDefault(_DUMMY_DATA);

var _FluxComponent = require('flummox/component/native');

var _FluxComponent2 = _interopRequireDefault(_FluxComponent);

var _Immutable = require('immutable');

var _Immutable2 = _interopRequireDefault(_Immutable);

var _React = require('react-native');

var _React2 = _interopRequireDefault(_React);

var _TYPES = require('./types');

var _TYPES2 = _interopRequireDefault(_TYPES);

var AppRegistry = _React2['default'].AppRegistry;
var Text = _React2['default'].Text;
var View = _React2['default'].View;

var flux = new PanelsFeed.App();
var feedActions = flux.getActions('feed');
feedActions.loadFeeds(_DUMMY_DATA2['default']);
feedActions.loadTypes(_TYPES2['default']);

var PlaygroundComponent = (function (_React$Component) {
  function PlaygroundComponent() {
    _classCallCheck(this, PlaygroundComponent);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(PlaygroundComponent, _React$Component);

  _createClass(PlaygroundComponent, [{
    key: 'render',
    value: function render() {
      return _React2['default'].createElement(
        View,
        { style: { marginTop: 25, marginLeft: 50 } },
        _React2['default'].createElement(
          _FluxComponent2['default'],
          { flux: flux },
          _React2['default'].createElement(_FeedContainer.Container, { id: 'properties' }),
          _React2['default'].createElement(_FeedContainer.Container, { id: 'boxhouse' })
        )
      );
    }
  }]);

  return PlaygroundComponent;
})(_React2['default'].Component);

AppRegistry.registerComponent('Playground', function () {
  return PlaygroundComponent;
});

var Playground = {
  flux: flux,
  FeedContainer: _FeedContainer.Container,
  Flummox: Flummox,
  FluxComponent: _FluxComponent2['default'],
  Immutable: _Immutable2['default'],
  PanelsFeed: PanelsFeed,
  PlaygroundComponent: PlaygroundComponent,
  React: _React2['default']
};
window.Playground = Playground;

console.log('Welcome to panels-feed playground.');
console.log('https://feed.usepanels.com');
console.log('Playground module', Playground);

},{"../../index":4,"../../ios":7,"../dummy-data":8,"./types":9,"flummox":undefined,"flummox/component/native":undefined,"immutable":undefined,"react-native":undefined}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Actions2 = require('flummox');

var _CardRecord = require('./records');

var FeedActions = (function (_Actions) {
  function FeedActions() {
    _classCallCheck(this, FeedActions);

    if (_Actions != null) {
      _Actions.apply(this, arguments);
    }
  }

  _inherits(FeedActions, _Actions);

  _createClass(FeedActions, [{
    key: 'loadCards',
    value: function loadCards(cards, feedId) {
      return {
        cards: cards,
        feedId: feedId
      };
    }
  }, {
    key: 'loadFeeds',
    value: function loadFeeds(feeds) {
      return { feeds: feeds };
    }
  }, {
    key: 'loadTypes',
    value: function loadTypes(types) {
      return { types: types };
    }
  }]);

  return FeedActions;
})(_Actions2.Actions);

exports['default'] = FeedActions;
module.exports = exports['default'];

},{"./records":12,"flummox":undefined}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Actions = require('./actions');

var _Actions2 = _interopRequireDefault(_Actions);

var _Flux2 = require('flummox');

var _Store = require('./store');

var _Store2 = _interopRequireDefault(_Store);

var AppFlux = (function (_Flux) {
  function AppFlux() {
    _classCallCheck(this, AppFlux);

    _get(Object.getPrototypeOf(AppFlux.prototype), 'constructor', this).call(this);

    this.createActions('feed', _Actions2['default']);
    this.createStore('feed', _Store2['default'], this);
  }

  _inherits(AppFlux, _Flux);

  return AppFlux;
})(_Flux2.Flux);

exports['default'] = AppFlux;
module.exports = exports['default'];

},{"./actions":2,"./store":14,"flummox":undefined}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

var _default = require('./actions');

exports.Actions = _interopRequire(_default);

var _default2 = require('./app');

exports.App = _interopRequire(_default2);

var _import = require('./records');

var _Records = _interopRequireWildcard(_import);

exports.Records = _Records;

var _default3 = require('./store');

exports.Store = _interopRequire(_default3);

},{"./actions":2,"./app":3,"./records":12,"./store":14}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _CardRecord = require('../records/card');

var _CardRecord2 = _interopRequireDefault(_CardRecord);

var React = require('react-native');
var View = React.View;

var Feed = (function (_React$Component) {
  function Feed() {
    _classCallCheck(this, Feed);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Feed, _React$Component);

  _createClass(Feed, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var cards = this.props.cards.map(function (card) {
        var Type = _this.props.types.get(card.type);
        return React.createElement(Type, { key: card.id, id: card.id });
      });

      return React.createElement(
        View,
        null,
        cards.toArray()
      );
    }
  }]);

  return Feed;
})(React.Component);

exports['default'] = Feed;

Feed.propTypes = {
  cards: React.PropTypes.arrayOf(_CardRecord2['default']),
  types: React.PropTypes.objectOf(React.PropTypes.element)
};

Feed.defaultProps = {
  cards: [],
  types: {}
};
module.exports = exports['default'];

},{"../records/card":10,"react-native":undefined}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Component = require('./component');

var _Component2 = _interopRequireDefault(_Component);

var _FluxComponent = require('flummox/component/native');

var _FluxComponent2 = _interopRequireDefault(_FluxComponent);

var _React = require('react-native');

var _React2 = _interopRequireDefault(_React);

var FeedContainer = (function (_React$Component) {
  function FeedContainer() {
    _classCallCheck(this, FeedContainer);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(FeedContainer, _React$Component);

  _createClass(FeedContainer, [{
    key: 'stores',
    get: function () {
      var _this = this;

      return {
        feed: function feed(store) {
          return {
            cards: store.cards(_this.props.id),
            types: store.types
          };
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _React2['default'].createElement(
        _FluxComponent2['default'],
        { connectToStores: this.stores },
        _React2['default'].createElement(_Component2['default'], null)
      );
    }
  }]);

  return FeedContainer;
})(_React2['default'].Component);

exports['default'] = FeedContainer;
module.exports = exports['default'];

},{"./component":5,"flummox/component/native":undefined,"react-native":undefined}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

var _default = require('./component');

exports.Component = _interopRequire(_default);

var _default2 = require('./container');

exports.Container = _interopRequire(_default2);

},{"./component":5,"./container":6}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var DUMMY_DATA = [{
  id: 'properties',
  cards: [{
    type: 'Property',
    id: 1
  }, {
    type: 'WeatherReport',
    id: 213
  }, {
    type: 'Property',
    id: 9
  }, {
    type: 'Property',
    id: 19
  }]
}, {
  id: 'boxhouse',
  cards: [{
    type: 'Box',
    id: 209
  }, {
    type: 'Doc',
    id: 9
  }]
}];

exports['default'] = DUMMY_DATA;
module.exports = exports['default'];

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _React = require('react-native');

var _React2 = _interopRequireDefault(_React);

var Text = _React2['default'].Text;

var Box = (function (_React$Component) {
  function Box() {
    _classCallCheck(this, Box);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Box, _React$Component);

  _createClass(Box, [{
    key: 'render',
    value: function render() {
      return _React2['default'].createElement(
        Text,
        null,
        'Box ',
        this.props.id
      );
    }
  }]);

  return Box;
})(_React2['default'].Component);

var Doc = (function (_React$Component2) {
  function Doc() {
    _classCallCheck(this, Doc);

    if (_React$Component2 != null) {
      _React$Component2.apply(this, arguments);
    }
  }

  _inherits(Doc, _React$Component2);

  _createClass(Doc, [{
    key: 'render',
    value: function render() {
      return _React2['default'].createElement(
        Text,
        null,
        'Doc ',
        this.props.id
      );
    }
  }]);

  return Doc;
})(_React2['default'].Component);

var Property = (function (_React$Component3) {
  function Property() {
    _classCallCheck(this, Property);

    if (_React$Component3 != null) {
      _React$Component3.apply(this, arguments);
    }
  }

  _inherits(Property, _React$Component3);

  _createClass(Property, [{
    key: 'render',
    value: function render() {
      return _React2['default'].createElement(
        Text,
        null,
        'Property ',
        this.props.id
      );
    }
  }]);

  return Property;
})(_React2['default'].Component);

var WeatherReport = (function (_React$Component4) {
  function WeatherReport() {
    _classCallCheck(this, WeatherReport);

    if (_React$Component4 != null) {
      _React$Component4.apply(this, arguments);
    }
  }

  _inherits(WeatherReport, _React$Component4);

  _createClass(WeatherReport, [{
    key: 'render',
    value: function render() {
      return _React2['default'].createElement(
        Text,
        null,
        'WeatherReport ',
        this.props.id
      );
    }
  }]);

  return WeatherReport;
})(_React2['default'].Component);

exports['default'] = {
  Box: Box,
  Doc: Doc,
  Property: Property,
  WeatherReport: WeatherReport
};
module.exports = exports['default'];

},{"react-native":undefined}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Record2 = require('immutable');

var CardRecord = (function (_Record) {
  function CardRecord() {
    _classCallCheck(this, CardRecord);

    if (_Record != null) {
      _Record.apply(this, arguments);
    }
  }

  _inherits(CardRecord, _Record);

  return CardRecord;
})(_Record2.Record({
  id: undefined,
  type: undefined
}));

exports['default'] = CardRecord;
;
module.exports = exports['default'];

},{"immutable":undefined}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _List$Record = require('immutable');

var FeedRecord = (function (_Record) {
  function FeedRecord() {
    _classCallCheck(this, FeedRecord);

    if (_Record != null) {
      _Record.apply(this, arguments);
    }
  }

  _inherits(FeedRecord, _Record);

  return FeedRecord;
})(_List$Record.Record({
  id: undefined,
  cards: _List$Record.List()
}));

exports['default'] = FeedRecord;
;
module.exports = exports['default'];

},{"immutable":undefined}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

var _default = require('./card');

exports.CardRecord = _interopRequire(_default);

var _default2 = require('./feed');

exports.FeedRecord = _interopRequire(_default2);

var _default3 = require('./state');

exports.StateRecord = _interopRequire(_default3);

},{"./card":10,"./feed":11,"./state":13}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Map$Record = require('immutable');

var StateRecord = (function (_Record) {
  function StateRecord() {
    _classCallCheck(this, StateRecord);

    if (_Record != null) {
      _Record.apply(this, arguments);
    }
  }

  _inherits(StateRecord, _Record);

  return StateRecord;
})(_Map$Record.Record({
  feeds: _Map$Record.Map(),
  types: _Map$Record.Map()
}));

exports['default'] = StateRecord;
;
module.exports = exports['default'];

},{"immutable":undefined}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _List$Map = require('immutable');

var _CardRecord$FeedRecord$StateRecord = require('./records');

var _Store2 = require('flummox');

var FeedStore = (function (_Store) {
  function FeedStore(flux) {
    _classCallCheck(this, FeedStore);

    _get(Object.getPrototypeOf(FeedStore.prototype), 'constructor', this).call(this);

    var feedActionIds = flux.getActionIds('feed');
    this.register(feedActionIds.loadCards, this.loadCards);
    this.register(feedActionIds.loadFeeds, this.loadFeeds);
    this.register(feedActionIds.loadTypes, this.loadTypes);

    this.state = new _CardRecord$FeedRecord$StateRecord.StateRecord();
  }

  _inherits(FeedStore, _Store);

  _createClass(FeedStore, [{
    key: 'cards',

    // Cards are things shown in a feed
    value: function cards(feedId) {
      return this.state.feeds.has(feedId) ? this.state.feeds.get(feedId).cards : _List$Map.Map();
    }
  }, {
    key: 'loadCards',
    value: function loadCards(_ref) {
      var cards = _ref.cards;
      var feedId = _ref.feedId;

      var newFeed = this.state.feeds.get(feedId) || new _CardRecord$FeedRecord$StateRecord.FeedRecord();
      this.setState(this.state.feeds.set(feedId, newFeed.set('cards', this.parseCards(cards))));
    }
  }, {
    key: 'parseCards',
    value: function parseCards(cards) {
      return _List$Map.List(cards.map(function (card) {
        return new _CardRecord$FeedRecord$StateRecord.CardRecord(card);
      }));
    }
  }, {
    key: 'feeds',

    // Feeds are lists of cards. They can show many different types of cards.
    get: function () {
      return this.state.feeds;
    }
  }, {
    key: 'loadFeeds',
    value: function loadFeeds(_ref2) {
      var feeds = _ref2.feeds;

      this.setState(this.state.set('feeds', this.parseFeeds(feeds)));
    }
  }, {
    key: 'parseFeeds',
    value: function parseFeeds(feeds) {
      var _this2 = this;

      var newFeeds = {};
      feeds.forEach(function (feed) {
        return newFeeds[feed.id] = new _CardRecord$FeedRecord$StateRecord.FeedRecord({
          cards: _this2.parseCards(feed.cards),
          id: feed.id
        });
      });
      return _List$Map.Map(newFeeds);
    }
  }, {
    key: 'types',

    // Types are the cards' components
    get: function () {
      return this.state.types;
    }
  }, {
    key: 'loadTypes',
    value: function loadTypes(_ref3) {
      var types = _ref3.types;
      this.setState(this.state.set('types', _List$Map.Map(types)));
    }
  }], [{
    key: 'assignState',
    value: function assignState(oldState, newState) {
      return newState;
    }
  }]);

  return FeedStore;
})(_Store2.Store);

exports['default'] = FeedStore;
module.exports = exports['default'];

},{"./records":12,"flummox":undefined,"immutable":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY3JhdmVyb2Qvb3BlbnNvdXJjZS9wYW5lbHMvcGFuZWxzLWZlZWQvcGxheWdyb3VuZC9pb3MvcGxheWdyb3VuZC5lczYiLCIvVXNlcnMvY3JhdmVyb2Qvb3BlbnNvdXJjZS9wYW5lbHMvcGFuZWxzLWZlZWQvYWN0aW9ucy5lczYiLCIvVXNlcnMvY3JhdmVyb2Qvb3BlbnNvdXJjZS9wYW5lbHMvcGFuZWxzLWZlZWQvYXBwLmVzNiIsIi9Vc2Vycy9jcmF2ZXJvZC9vcGVuc291cmNlL3BhbmVscy9wYW5lbHMtZmVlZC9pbmRleC5lczYiLCIvVXNlcnMvY3JhdmVyb2Qvb3BlbnNvdXJjZS9wYW5lbHMvcGFuZWxzLWZlZWQvaW9zL2NvbXBvbmVudC5lczYiLCIvVXNlcnMvY3JhdmVyb2Qvb3BlbnNvdXJjZS9wYW5lbHMvcGFuZWxzLWZlZWQvaW9zL2NvbnRhaW5lci5lczYiLCIvVXNlcnMvY3JhdmVyb2Qvb3BlbnNvdXJjZS9wYW5lbHMvcGFuZWxzLWZlZWQvaW9zL2luZGV4LmVzNiIsIi9Vc2Vycy9jcmF2ZXJvZC9vcGVuc291cmNlL3BhbmVscy9wYW5lbHMtZmVlZC9wbGF5Z3JvdW5kL2R1bW15LWRhdGEuZXM2IiwiL1VzZXJzL2NyYXZlcm9kL29wZW5zb3VyY2UvcGFuZWxzL3BhbmVscy1mZWVkL3BsYXlncm91bmQvaW9zL3R5cGVzLmVzNiIsIi9Vc2Vycy9jcmF2ZXJvZC9vcGVuc291cmNlL3BhbmVscy9wYW5lbHMtZmVlZC9yZWNvcmRzL2NhcmQuZXM2IiwiL1VzZXJzL2NyYXZlcm9kL29wZW5zb3VyY2UvcGFuZWxzL3BhbmVscy1mZWVkL3JlY29yZHMvZmVlZC5lczYiLCIvVXNlcnMvY3JhdmVyb2Qvb3BlbnNvdXJjZS9wYW5lbHMvcGFuZWxzLWZlZWQvcmVjb3Jkcy9pbmRleC5lczYiLCIvVXNlcnMvY3JhdmVyb2Qvb3BlbnNvdXJjZS9wYW5lbHMvcGFuZWxzLWZlZWQvcmVjb3Jkcy9zdGF0ZS5lczYiLCIvVXNlcnMvY3JhdmVyb2Qvb3BlbnNvdXJjZS9wYW5lbHMvcGFuZWxzLWZlZWQvc3RvcmUuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O3NCQ0F5QixTQUFTOztJQUF0QixPQUFPOzt1QkFDUyxhQUFhOztJQUE3QixVQUFVOzs2QkFDcUIsV0FBVzs7MEJBQy9CLGVBQWU7Ozs7NkJBQ1osMEJBQTBCOzs7O3lCQUM5QixXQUFXOzs7O3FCQUNmLGNBQWM7Ozs7cUJBQ2QsU0FBUzs7OztJQUVuQixXQUFXLHNCQUFYLFdBQVc7SUFBRSxJQUFJLHNCQUFKLElBQUk7SUFBRSxJQUFJLHNCQUFKLElBQUk7O0FBQy9CLElBQU0sSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2xDLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUMsV0FBVyxDQUFDLFNBQVMseUJBQVksQ0FBQztBQUNsQyxXQUFXLENBQUMsU0FBUyxvQkFBTyxDQUFDOztJQUV2QixtQkFBbUI7V0FBbkIsbUJBQW1COzBCQUFuQixtQkFBbUI7Ozs7Ozs7WUFBbkIsbUJBQW1COztlQUFuQixtQkFBbUI7O1dBQ2pCLGtCQUFHO0FBQ1AsYUFDRTtBQUFDLFlBQUk7VUFBQyxLQUFLLEVBQUUsRUFBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUMsQUFBQztRQUMzQzs7WUFBZSxJQUFJLEVBQUUsSUFBSSxBQUFDO1VBQ3hCLGdEQWxCRCxTQUFTLElBa0JPLEVBQUUsRUFBQyxZQUFZLEdBQUc7VUFDakMsZ0RBbkJELFNBQVMsSUFtQk8sRUFBRSxFQUFDLFVBQVUsR0FBRztTQUNqQjtPQUNYLENBQ1A7S0FDSDs7O1NBVkcsbUJBQW1CO0dBQVMsbUJBQU0sU0FBUzs7QUFhakQsV0FBVyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRTtTQUFN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QixLQUFLOztxQkFFTyxTQUFTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCAqIGFzIEZsdW1tb3ggZnJvbSAnZmx1bW1veCc7XG5pbXBvcnQgKiBhcyBQYW5lbHNGZWVkIGZyb20gJy4uLy4uL2luZGV4JztcbmltcG9ydCB7IENvbnRhaW5lciBhcyBGZWVkQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vaW9zJztcbmltcG9ydCBEVU1NWV9EQVRBIGZyb20gJy4uL2R1bW15LWRhdGEnO1xuaW1wb3J0IEZsdXhDb21wb25lbnQgZnJvbSAnZmx1bW1veC9jb21wb25lbnQvbmF0aXZlJztcbmltcG9ydCBJbW11dGFibGUgZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IFRZUEVTIGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCB7IEFwcFJlZ2lzdHJ5LCBUZXh0LCBWaWV3IH0gPSBSZWFjdDtcbmNvbnN0IGZsdXggPSBuZXcgUGFuZWxzRmVlZC5BcHAoKTtcbmNvbnN0IGZlZWRBY3Rpb25zID0gZmx1eC5nZXRBY3Rpb25zKCdmZWVkJyk7XG5mZWVkQWN0aW9ucy5sb2FkRmVlZHMoRFVNTVlfREFUQSk7XG5mZWVkQWN0aW9ucy5sb2FkVHlwZXMoVFlQRVMpO1xuXG5jbGFzcyBQbGF5Z3JvdW5kQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8VmlldyBzdHlsZT17e21hcmdpblRvcDogMjUsIG1hcmdpbkxlZnQ6IDUwfX0+XG4gICAgICAgIDxGbHV4Q29tcG9uZW50IGZsdXg9e2ZsdXh9PlxuICAgICAgICAgIDxGZWVkQ29udGFpbmVyIGlkPSdwcm9wZXJ0aWVzJyAvPlxuICAgICAgICAgIDxGZWVkQ29udGFpbmVyIGlkPSdib3hob3VzZScgLz5cbiAgICAgICAgPC9GbHV4Q29tcG9uZW50PlxuICAgICAgPC9WaWV3PlxuICAgICk7XG4gIH1cbn1cblxuQXBwUmVnaXN0cnkucmVnaXN0ZXJDb21wb25lbnQoJ1BsYXlncm91bmQnLCAoKSA9PiBQbGF5Z3JvdW5kQ29tcG9uZW50KTtcblxubGV0IFBsYXlncm91bmQgPSB7XG4gIGZsdXgsXG4gIEZlZWRDb250YWluZXIsXG4gIEZsdW1tb3gsXG4gIEZsdXhDb21wb25lbnQsXG4gIEltbXV0YWJsZSxcbiAgUGFuZWxzRmVlZCxcbiAgUGxheWdyb3VuZENvbXBvbmVudCxcbiAgUmVhY3Rcbn07XG53aW5kb3cuUGxheWdyb3VuZCA9IFBsYXlncm91bmQ7XG5cbmNvbnNvbGUubG9nKCdXZWxjb21lIHRvIHBhbmVscy1mZWVkIHBsYXlncm91bmQuJyk7XG5jb25zb2xlLmxvZygnaHR0cHM6Ly9mZWVkLnVzZXBhbmVscy5jb20nKTtcbmNvbnNvbGUubG9nKCdQbGF5Z3JvdW5kIG1vZHVsZScsIFBsYXlncm91bmQpO1xuIiwiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ2ZsdW1tb3gnO1xuaW1wb3J0IHsgQ2FyZFJlY29yZCB9IGZyb20gJy4vcmVjb3Jkcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlZWRBY3Rpb25zIGV4dGVuZHMgQWN0aW9ucyB7XG4gIGxvYWRDYXJkcyhjYXJkcywgZmVlZElkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcmRzLFxuICAgICAgZmVlZElkXG4gICAgfTtcbiAgfVxuXG4gIGxvYWRGZWVkcyhmZWVkcykge1xuICAgIHJldHVybiB7IGZlZWRzIH07XG4gIH1cblxuICBsb2FkVHlwZXModHlwZXMpIHtcbiAgICByZXR1cm4geyB0eXBlcyB9O1xuICB9XG59XG4iLCJpbXBvcnQgQWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgRmx1eCB9IGZyb20gJ2ZsdW1tb3gnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBGbHV4IGV4dGVuZHMgRmx1eCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmNyZWF0ZUFjdGlvbnMoJ2ZlZWQnLCBBY3Rpb25zKTtcbiAgICB0aGlzLmNyZWF0ZVN0b3JlKCdmZWVkJywgU3RvcmUsIHRoaXMpO1xuICB9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEFjdGlvbnMgfSBmcm9tICcuL2FjdGlvbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBcHAgfSBmcm9tICcuL2FwcCc7XG5leHBvcnQgKiBhcyBSZWNvcmRzIGZyb20gJy4vcmVjb3Jkcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFN0b3JlIH0gZnJvbSAnLi9zdG9yZSc7XG4iLCJpbXBvcnQgQ2FyZFJlY29yZCBmcm9tICcuLi9yZWNvcmRzL2NhcmQnO1xubGV0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QtbmF0aXZlJyk7XG5sZXQgeyBWaWV3IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmVlZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY2FyZHMgPSB0aGlzLnByb3BzLmNhcmRzLm1hcCgoY2FyZCkgPT4ge1xuICAgICAgY29uc3QgVHlwZSA9IHRoaXMucHJvcHMudHlwZXMuZ2V0KGNhcmQudHlwZSk7XG4gICAgICByZXR1cm4gPFR5cGUga2V5PXtjYXJkLmlkfSBpZD17Y2FyZC5pZH0gLz47XG4gICAgfSk7XG5cbiAgICByZXR1cm4gPFZpZXc+e2NhcmRzLnRvQXJyYXkoKX08L1ZpZXc+O1xuICB9XG59XG5cbkZlZWQucHJvcFR5cGVzID0ge1xuICBjYXJkczogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoQ2FyZFJlY29yZCksXG4gIHR5cGVzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0T2YoUmVhY3QuUHJvcFR5cGVzLmVsZW1lbnQpXG59XG5cbkZlZWQuZGVmYXVsdFByb3BzID0ge1xuICBjYXJkczogW10sXG4gIHR5cGVzOiB7fVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgRmx1eENvbXBvbmVudCBmcm9tICdmbHVtbW94L2NvbXBvbmVudC9uYXRpdmUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlZWRDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBnZXQgc3RvcmVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmZWVkOiBzdG9yZSA9PiAoe1xuICAgICAgICBjYXJkczogc3RvcmUuY2FyZHModGhpcy5wcm9wcy5pZCksXG4gICAgICAgIHR5cGVzOiBzdG9yZS50eXBlc1xuICAgICAgfSlcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Rmx1eENvbXBvbmVudCBjb25uZWN0VG9TdG9yZXM9e3RoaXMuc3RvcmVzfT48Q29tcG9uZW50IC8+PC9GbHV4Q29tcG9uZW50PjtcbiAgfVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbnRhaW5lciB9IGZyb20gJy4vY29udGFpbmVyJztcbiIsImNvbnN0IERVTU1ZX0RBVEEgPSBbe1xuICBpZDogJ3Byb3BlcnRpZXMnLFxuICBjYXJkczogW3tcbiAgICB0eXBlOiAnUHJvcGVydHknLFxuICAgIGlkOiAxXG4gIH0sIHtcbiAgICB0eXBlOiAnV2VhdGhlclJlcG9ydCcsXG4gICAgaWQ6IDIxM1xuICB9LCB7XG4gICAgdHlwZTogJ1Byb3BlcnR5JyxcbiAgICBpZDogOVxuICB9LCB7XG4gICAgdHlwZTogJ1Byb3BlcnR5JyxcbiAgICBpZDogMTlcbiAgfV1cbn0sIHtcbiAgaWQ6ICdib3hob3VzZScsXG4gIGNhcmRzOiBbe1xuICAgIHR5cGU6ICdCb3gnLFxuICAgIGlkOiAyMDlcbiAgfSwge1xuICAgIHR5cGU6ICdEb2MnLFxuICAgIGlkOiA5XG4gIH1dXG59XTtcblxuZXhwb3J0IGRlZmF1bHQgRFVNTVlfREFUQTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdC1uYXRpdmUnO1xubGV0IHsgVGV4dCB9ID0gUmVhY3Q7XG5cbmNsYXNzIEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPFRleHQ+Qm94IHt0aGlzLnByb3BzLmlkfTwvVGV4dD47XG4gIH1cbn1cblxuY2xhc3MgRG9jIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8VGV4dD5Eb2Mge3RoaXMucHJvcHMuaWR9PC9UZXh0PjtcbiAgfVxufVxuXG5jbGFzcyBQcm9wZXJ0eSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPFRleHQ+UHJvcGVydHkge3RoaXMucHJvcHMuaWR9PC9UZXh0PjtcbiAgfVxufVxuXG5jbGFzcyBXZWF0aGVyUmVwb3J0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8VGV4dD5XZWF0aGVyUmVwb3J0IHt0aGlzLnByb3BzLmlkfTwvVGV4dD47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBCb3gsXG4gIERvYyxcbiAgUHJvcGVydHksXG4gIFdlYXRoZXJSZXBvcnRcbn1cbiIsImltcG9ydCB7IFJlY29yZCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRSZWNvcmQgZXh0ZW5kcyBSZWNvcmQoe1xuICBpZDogdW5kZWZpbmVkLFxuICB0eXBlOiB1bmRlZmluZWRcbn0pIHt9O1xuIiwiaW1wb3J0IHsgTGlzdCwgUmVjb3JkIH0gZnJvbSAnaW1tdXRhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmVlZFJlY29yZCBleHRlbmRzIFJlY29yZCh7XG4gIGlkOiB1bmRlZmluZWQsXG4gIGNhcmRzOiBMaXN0KClcbn0pIHt9O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkUmVjb3JkIH0gZnJvbSAnLi9jYXJkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmVlZFJlY29yZCB9IGZyb20gJy4vZmVlZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFN0YXRlUmVjb3JkIH0gZnJvbSAnLi9zdGF0ZSc7XG4iLCJpbXBvcnQgeyBNYXAsIFJlY29yZCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlUmVjb3JkIGV4dGVuZHMgUmVjb3JkKHtcbiAgZmVlZHM6IE1hcCgpLFxuICB0eXBlczogTWFwKClcbn0pIHt9O1xuIiwiaW1wb3J0IHsgTGlzdCwgTWFwIH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCB7IENhcmRSZWNvcmQsIEZlZWRSZWNvcmQsIFN0YXRlUmVjb3JkIH0gZnJvbSAnLi9yZWNvcmRzJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnZmx1bW1veCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlZWRTdG9yZSBleHRlbmRzIFN0b3JlIHtcbiAgc3RhdGljIGFzc2lnblN0YXRlKG9sZFN0YXRlLCBuZXdTdGF0ZSkge1xuICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGZsdXgpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgY29uc3QgZmVlZEFjdGlvbklkcyA9IGZsdXguZ2V0QWN0aW9uSWRzKCdmZWVkJyk7XG4gICAgdGhpcy5yZWdpc3RlcihmZWVkQWN0aW9uSWRzLmxvYWRDYXJkcywgdGhpcy5sb2FkQ2FyZHMpO1xuICAgIHRoaXMucmVnaXN0ZXIoZmVlZEFjdGlvbklkcy5sb2FkRmVlZHMsIHRoaXMubG9hZEZlZWRzKTtcbiAgICB0aGlzLnJlZ2lzdGVyKGZlZWRBY3Rpb25JZHMubG9hZFR5cGVzLCB0aGlzLmxvYWRUeXBlcyk7XG5cbiAgICB0aGlzLnN0YXRlID0gbmV3IFN0YXRlUmVjb3JkKCk7XG4gIH1cblxuICAvLyBDYXJkcyBhcmUgdGhpbmdzIHNob3duIGluIGEgZmVlZFxuICBjYXJkcyhmZWVkSWQpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5mZWVkcy5oYXMoZmVlZElkKSA/IHRoaXMuc3RhdGUuZmVlZHMuZ2V0KGZlZWRJZCkuY2FyZHMgOiBNYXAoKTtcbiAgfVxuICBsb2FkQ2FyZHMoe2NhcmRzLCBmZWVkSWR9KSB7XG4gICAgY29uc3QgbmV3RmVlZCA9IHRoaXMuc3RhdGUuZmVlZHMuZ2V0KGZlZWRJZCkgfHwgbmV3IEZlZWRSZWNvcmQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUuZmVlZHMuc2V0KGZlZWRJZCwgbmV3RmVlZC5zZXQoJ2NhcmRzJywgdGhpcy5wYXJzZUNhcmRzKGNhcmRzKSkpKTtcbiAgfVxuICBwYXJzZUNhcmRzKGNhcmRzKSB7IHJldHVybiBMaXN0KGNhcmRzLm1hcChjYXJkID0+IG5ldyBDYXJkUmVjb3JkKGNhcmQpKSk7IH1cblxuICAvLyBGZWVkcyBhcmUgbGlzdHMgb2YgY2FyZHMuIFRoZXkgY2FuIHNob3cgbWFueSBkaWZmZXJlbnQgdHlwZXMgb2YgY2FyZHMuXG4gIGdldCBmZWVkcygpIHsgcmV0dXJuIHRoaXMuc3RhdGUuZmVlZHM7IH1cbiAgbG9hZEZlZWRzKHtmZWVkc30pIHtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUuc2V0KCdmZWVkcycsIHRoaXMucGFyc2VGZWVkcyhmZWVkcykpKTtcbiAgfVxuICBwYXJzZUZlZWRzKGZlZWRzKSB7XG4gICAgbGV0IG5ld0ZlZWRzID0ge307XG4gICAgZmVlZHMuZm9yRWFjaChmZWVkID0+IG5ld0ZlZWRzW2ZlZWQuaWRdID0gbmV3IEZlZWRSZWNvcmQoe1xuICAgICAgY2FyZHM6IHRoaXMucGFyc2VDYXJkcyhmZWVkLmNhcmRzKSxcbiAgICAgIGlkOiBmZWVkLmlkXG4gICAgfSkpO1xuICAgIHJldHVybiBNYXAobmV3RmVlZHMpO1xuICB9XG5cbiAgLy8gVHlwZXMgYXJlIHRoZSBjYXJkcycgY29tcG9uZW50c1xuICBnZXQgdHlwZXMoKSB7IHJldHVybiB0aGlzLnN0YXRlLnR5cGVzOyB9XG4gIGxvYWRUeXBlcyh7dHlwZXN9KSB7IHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZS5zZXQoJ3R5cGVzJywgTWFwKHR5cGVzKSkpOyB9XG59XG4iXX0=
