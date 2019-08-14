FROM ***REMOVED***.dkr.ecr.ap-southeast-2.amazonaws.com/base/node:10.14.1-builder-20181212

USER hooroo

COPY package.json yarn.lock ./
RUN yarn

COPY --chown=hooroo . .

CMD ["yarn", "storybook"]
