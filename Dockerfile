FROM node:latest

RUN mkdir /react_test/

ADD public /react_test/public/
ADD src /react_test/src/
ADD .gitignore /react_test/
ADD package.json /react_test/
ADD package-lock.json /react_test/
ADD README.md /react_test/
ADD yarn.lock /react_test/

WORKDIR /react_test

RUN npm install -g create-react-app
RUN npm install --save react react-dom react-scripts
CMD ["npm","start"]
