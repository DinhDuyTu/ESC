FROM php:7.4-fpm-alpine

RUN apk --no-cache update && \
    apk --no-cache upgrade && \
    apk --no-cache add \
    curl-dev \
    freetype-dev \
    libjpeg-turbo-dev \
    libpng-dev \
    libxml2-dev \
    zlib-dev \
    pcre-dev \
    g++ \
    make \
    autoconf \
    openssl \
    nodejs-npm \
    git \
    bash \
    oniguruma-dev

RUN git clone -b 4.2.0 --depth 1 https://github.com/phpredis/phpredis.git /usr/src/php/ext/redis
RUN docker-php-ext-install \
    pdo_mysql \
    redis \
    opcache \
    gd \
  && docker-php-ext-configure gd \
    --with-freetype \
    --with-jpeg

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
  && chmod +x /usr/local/bin/composer

RUN rm -rf /var/cache/apk/*

RUN pecl install xdebug \
	&& docker-php-ext-enable xdebug

WORKDIR /usr/share/nginx/html
