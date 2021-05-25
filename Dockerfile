FROM node:14.17

WORKDIR /application

COPY package.json yarn.lock ./
RUN yarn

COPY . .

CMD ["yarn", "storybook"]
