# Etapa de build
FROM node:18 AS build
WORKDIR /app

# Copiar primero package.json y lock
COPY package*.json ./

# Instalar dependencias + devDependencies
RUN npm install --include=dev

# Instalamos vite globalmente para asegurarnos de que exista
RUN npm install -g vite

# Copiar resto del código
COPY . .

# Construir el proyecto
RUN npm run build

# Etapa de producción
FROM node:18
WORKDIR /app

# Instalar servidor estático
RUN npm install -g serve

# Copiar solo el resultado del build
COPY --from=build /app/dist ./dist

# Puerto
ENV PORT=3000
EXPOSE 3000

# Iniciar servidor
CMD ["serve", "-s", "dist", "-l", "3000"]
