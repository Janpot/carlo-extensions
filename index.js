const path = require('path')

function withExtensions (extensions = [], launchConfig = {}) {
  const extensionPaths = extensions.join(',');
  return {
    ...launchConfig,
    args: [
      ...(launchConfig.args || []),
      `--load-extensions=${extensionPaths}`,
      `--disable-extensions-except=${extensionPaths}`,
    ]
  }
}

module.exports = {
  withExtensions
};
