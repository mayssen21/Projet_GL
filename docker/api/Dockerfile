FROM node:20-bullseye
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install
COPY api/ .
EXPOSE 3000
CMD ["node", "index.mjs"]