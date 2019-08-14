const path = require('path');

module.exports = {
  params: ({ args }) => ({
    root: path.resolve(__dirname, '../../..'),
    name: path.basename(args.name),
  }),
};
