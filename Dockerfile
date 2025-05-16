# Этап сборки
FROM node:22-alpine AS builder
WORKDIR /app

# Копируем package.json и package-lock.json, устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем исходники и собираем проект
COPY . .
RUN npm run build

# Этап рантайма
FROM node:22-alpine
WORKDIR /app

# Устанавливаем глобально пакет serve
RUN npm install -g serve

# Копируем собранные файлы из этапа builder
COPY --from=builder /app/dist ./dist


# Запускаем serve в режиме SPA (single-page app)
CMD ["serve", "-s", "dist", "-l", "80"]
