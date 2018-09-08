FROM starefossen/ruby-node:2-8

WORKDIR /app

COPY . /app

RUN yarn global add gulp-cli
RUN yarn install --production=false
RUN bundle install
