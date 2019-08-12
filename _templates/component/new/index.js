const path = require('path');

module.exports = {
  params: ({ args }) => ({
    componentsRoot: path.resolve(__dirname, '../../../packages/components/src'),
    componentPath: args.path,
    componentName: path.basename(args.path),
    componentModuleName: args.path.split('/')[0],
  }),
};
