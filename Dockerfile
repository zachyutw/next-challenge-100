FROM node:lts as dependencies
WORKDIR /var
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as dev-base
WORKDIR /var
COPY . .
COPY --from=dependencies /var/node_modules ./node_modules
RUN yarn build

FROM node:lts as dev-running
WORKDIR /var
ENV NODE_ENV production
ENV PORT 3000

COPY --from=dev-base /var/public ./public
COPY --from=dev-base /var/.next ./.next
COPY --from=dev-base /var/node_modules ./node_modules
COPY --from=dev-base /var/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]