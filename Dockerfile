FROM node:23.6.0-alpine

WORKDIR /vue

# Set permissions for the vue directory, node already has UID:GID 1000:1000, so we can use it.
RUN chown -R node:node /vue

# Switch to node user (already has UID:GID 1000:1000)
USER node

EXPOSE 5173

CMD ["tail", "-f", "/dev/null"]