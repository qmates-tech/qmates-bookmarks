FROM node:22.16.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22.16.0-alpine
WORKDIR /app
COPY --from=build /app/package*.json ./
RUN npm ci --omit=dev
COPY --from=build /app/dist/src ./dist/src
COPY --from=build /app/public ./dist/public
USER node

CMD [ "node", "." ]
