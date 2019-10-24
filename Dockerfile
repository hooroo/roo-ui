FROM node:10.14

WORKDIR /application

COPY package.json yarn.lock ./
RUN yarn

COPY . .

CMD ["yarn", "storybook"]
