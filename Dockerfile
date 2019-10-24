FROM node:10.14

COPY package.json yarn.lock ./
RUN yarn

COPY . .

CMD ["yarn", "storybook"]
