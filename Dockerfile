FROM 730011650125.dkr.ecr.ap-southeast-2.amazonaws.com/base/node:10.14.1-builder-20181212

USER hooroo

COPY --chown=hooroo . .

RUN yarn
RUN yarn lerna bootstrap

CMD ["yarn", "storybook"]
