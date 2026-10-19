FROM node:18-alpine
WORKDIR /app
# Otimização de Cache das dependências
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 8080
CMD ["npm", "start"]
