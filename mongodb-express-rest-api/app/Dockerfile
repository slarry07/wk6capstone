# Use Node.js as base image
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Expose port (adjust if your app uses 3000 or 5000)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
