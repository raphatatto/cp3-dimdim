FROM node:18

RUN apt-get update && apt-get install -y libaio1

RUN useradd -ms /bin/bash appuser

WORKDIR /home/appuser/app

COPY package*.json ./
RUN npm install

COPY . .

USER appuser
ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "index.js"]