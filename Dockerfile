FROM node:18.10 AS compile-image

#step uno
WORKDIR /opt/ng
COPY package.json package-lock.json ./
RUN npm install
ENV PATH="./node_modules/.bin:$PATH"
COPY . ./
RUN ng build

#step due
FROM arm32v7/nginx
#COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=compile-image /opt/ng/dist/my-smart-home /usr/share/nginx/html
