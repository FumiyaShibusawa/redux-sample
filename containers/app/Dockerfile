FROM ruby:latest

ENV LANG C.UTF-8
ENV APP_ROOT ./redux-sample

WORKDIR $APP_ROOT

# 基本的なパッケージのインストール
RUN apt-get update \
    && apt-get install -y build-essential \
       curl \
       git \
       vim \
       less \
       apt-transport-https \
       wget \
    && apt-get autoclean && \
       apt-get clean && \
       rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*


# yarnパッケージ管理ツールインストール
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn

# Node.jsをインストール
RUN curl -sL https://deb.nodesource.com/setup_9.x | bash - && \
    apt-get install nodejs

COPY . .

RUN bundle install
RUN rails new . --webpack=react --skip-active-record
RUN yarn install

EXPOSE 5000
