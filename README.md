# carlo-extensions

Use chrome extensions conveniently in [carlo](https://www.npmjs.com/package/carlo);

```js
const { withExtensions } = require('carlo-extensions');
const app = await carlo.launch(withExtensions([
  path.resolve(__dirname, 'my-extension')
], {
  args: [ '--auto-open-devtools-for-tabs' ]
}));
```

The `@npm-chrome-extensions` org publishes existing chrome extensions on npm. You can use them as follows:

```sh
npm i -D @npm-chrome-extensions/react-devtools@3.4.2-dev.1
```

```js
const { withExtensions } = require('carlo-extensions');
const app = await carlo.launch(withExtensions([
  require('@npm-chrome-extensions/react-devtools')
], {
  args: [ '--auto-open-devtools-for-tabs' ]
}));
```

[Open a ticket or a PR](https://github.com/janpot/npm-chrome-extensions/issues) if you want an extension included. Make sure its license allows republishing.
