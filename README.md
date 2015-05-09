# panels-feed

A feed for panels to display multiple cards at once.

See the [web](playground/web/playground.es6) and [ios](playground/ios/playground.es6) playgrounds
for examples.

## Getting started

### Install the dependencies

```
npm install

cd playground/ios
npm install
```

Until `flummox` gets a native component you'll have to install it yourself:

So, somewhere outside your project:

```
git clone https://github.com/dariocravero/flummox.git
cd flummox
git checkout native
```

Then, inside your project:
```
cd playground/ios
npm i /path/to/the/flummox/we/downloaded
```

## Running the app

```
npm start
```

### Web

```
open http://localhost:3000
```

### iOS

```
open playground/ios/Playground.xcodeproj
```

and hit play to run the app in Xcode.



License MIT

UXtemple Limited (c) 2015 <hi@uxtemple.com>

[Use panels](https://usepanels.com)
