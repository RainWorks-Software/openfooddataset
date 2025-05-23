FROM oven/bun:debian
LABEL version="1.0.0"
LABEL author="rainwashed"
LABEL repo="https://github.com/RainWorks-Software/openfooddataset"

RUN echo "setting env variables. please change when creating if not suitable."
ENV PRODUCTS_DIR=/data/products
ENV LOG_SQLITE=/data/log.sqlite
ENV PRODUCTS_DATE=18/05/25

RUN echo "copying build to container"
WORKDIR /app
COPY . .
RUN bun install
RUN bun run build

RUN echo "exposing port 3000 by default"
EXPOSE 3000

RUN echo "creating a volume /data. please mount as r/o to the products json folder."
VOLUME [ "/data" ] 

CMD [ "build/server" ]