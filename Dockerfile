# Etapa de build
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa de producción
FROM node:18
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist

# Easypanel define $PORT automáticamente
ENV PORT=3000
EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
