# Базовый образ Node.js
FROM node:18

# Создание рабочей директории
WORKDIR /app

# Копирование package.json и package-lock.json
COPY package*.json ./

# Установка зависимостей
RUN npm install

# Копирование исходных файлов проекта
COPY .. .

# Порт, который будет использоваться приложением
EXPOSE 3000

# Запуск приложения
CMD ["npm run dev"]