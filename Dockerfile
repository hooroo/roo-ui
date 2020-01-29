FROM node:10.18

WORKDIR /application

COPY package.json yarn.lock ./
RUN yarn

COPY . .

CMD ["yarn", "storybook"]
