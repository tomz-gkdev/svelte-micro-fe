# Dockerfile for Next.js
FROM node:latest

# Set the working directory in the container
WORKDIR /app/svelte-poc

# Install pnpm
RUN npm install -g pnpm

# Copy the current directory contents into the container at /app
COPY . .

# RUN pnpm install
# RUN pnpm run build
# CMD ["pnpm", "start"]
