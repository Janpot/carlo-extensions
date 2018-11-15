# carlo-extensions

Use chrome extensions conveniently in headful puppeteer;

```js
const { withExtensions } = require('puppeteer-extensions');
const browser = await puppeteer.launch(withExtensions([
  path.resolve(__dirname, 'my-extension')
], {
  headless: false,
  devtools: true
}));
```

The `@npm-chrome-extensions` npm org publishes existing chrome extensions. You can used them as follows:

```sh
npm i -D @npm-chrome-extensions/react-devtools@3.4.2-dev.0
```

```js
const { withExtensions } = require('puppeteer-extensions');
const browser = await puppeteer.launch(withExtensions([
  require('@npm-chrome-extensions/react-devtools')
], {
  headless: false,
  devtools: true
}));
```

[Open a ticket or a PR](https://github.com/janpot/npm-chrome-extensions/issues) if you want an extension included. Make sure its license allows republishing.
