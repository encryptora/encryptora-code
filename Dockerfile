FROM node:18 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:18
WORKDIR /app
COPY --from=builder /app /app
RUN npm install -g serve

ENV PORT=5173
EXPOSE 5173

ENTRYPOINT serve -s dist -l $PORT
