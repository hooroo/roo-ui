FROM buildkite/puppeteer:10.0.0

WORKDIR /application

RUN apt-get update && apt-get install git -y
COPY package.json yarn.lock ./
RUN yarn

COPY . .

CMD ["yarn", "storybook"]
