# How to use react-native with babel without webpack or browserify

- `npm install --production`; remove any dependencies to libraries like `babel`, `react` and the likes.
Only install the direct dependencies, e.g.: `react-native` and `flummox`.
The issue is that the dependency resolver hangs big time; it's probably just too many files or
something like it.

- Make sure to separate the components into their own packages.

- `react-native/addons` is `react-native`.
