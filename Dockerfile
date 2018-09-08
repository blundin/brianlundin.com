FROM starefossen/ruby-node:latest

WORKDIR /app

COPY . /app

RUN yarn global add gulp-cli
RUN yarn install --production=false --ignore-optional
RUN bundle install
