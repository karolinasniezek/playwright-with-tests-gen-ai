FROM node:23.5.0-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000

CMD ["npm", "start"]

HEALTHCHECK --interval=30s --timeout=10s \
    CMD curl -f http://localhost:3000/health || exit 1