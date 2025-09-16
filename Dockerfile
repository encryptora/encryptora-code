# Etapa de build
FROM node:18 AS build
WORKDIR /app

# Copiamos primero package.json y package-lock.json para aprovechar caché
COPY package*.json ./

# Instala dependencias incluyendo las de desarrollo (vite, eslint, tailwind, etc.)
RUN npm install --include=dev

# Copiamos el resto del código
COPY . .

# Construimos la app
RUN npm run build

# Etapa de producción
FROM node:18
WORKDIR /app

# Instala servidor estático "serve"
RUN npm install -g serve

# Copiamos solo la carpeta dist generada en la etapa de build
COPY --from=build /app/dist ./dist

# Easypanel asigna $PORT automáticamente, usamos 3000 por defecto
ENV PORT=3000
EXPOSE 3000

# Comando de inicio
CMD ["serve", "-s", "dist", "-l", "3000"]
