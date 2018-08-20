const path = require('path');

module.exports = {
  params: ({ args }) => ({
    componentsRoot: path.resolve(__dirname, '../../../packages/components/src'),
    componentPath: args.componentPath,
    componentName: path.basename(args.componentPath),
    componentModuleName: args.componentPath.split('/')[0],
  }),
};
