const carlo = require('carlo');
const path = require('path')
const { withExtensions } = require('..');

(async () => {
  const app = await carlo.launch(withExtensions([
    require('@npm-chrome-extensions/react-devtools')
  ], {
    args: [ '--auto-open-devtools-for-tabs' ]
  }));

  app.on('exit', () => process.exit());
  app.serveFolder(path.resolve(__dirname));

  // Expose 'env' function in the web environment.
  await app.exposeFunction('env', _ => process.env);

  // Navigate to the main page of your app.
  await app.load('index.html');
})();
