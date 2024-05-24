# Dockerfile for Frontend

# Step 1: Build the Vite app
FROM node:16.13-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# List contents of /app after copying package.json and package-lock.json
RUN ls -la /app

# Install dependencies
RUN npm install

# List contents of /app after installing dependencies
RUN ls -la /app

# Copy the rest of the application code
COPY . ./

# List contents of /app after copying the rest of the code
RUN ls -la /app

# Build the Vite app and capture the output
RUN npm run build > build.log 2>&1 || (echo "Build failed"; cat build.log; exit 1)

# Display the contents of build.log regardless of success or failure
RUN echo "Displaying build.log:" && cat build.log

# List contents of /app after the build to ensure dist is created
RUN ls -la /app
RUN ls -la /app/dist || echo "/app/dist does not exist"

# Step 2: Serve the Vite app with nginx
FROM nginx:alpine

# Copy the built files and the build log from the previous step to the nginx container
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/build.log /usr/share/nginx/html/build.log

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
