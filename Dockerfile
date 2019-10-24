FROM node:10.14

USER hooroo

COPY --chown=hooroo package.json yarn.lock ./
RUN yarn

COPY --chown=hooroo . .

CMD ["yarn", "storybook"]
