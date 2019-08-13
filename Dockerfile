FROM 730011650125.dkr.ecr.ap-southeast-2.amazonaws.com/base/node:10.14.1-runtime-20181212

USER hooroo

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn

# Bundle app source
COPY . .

CMD ["yarn", "storybook"]
