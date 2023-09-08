FROM node:slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code to the working directory
COPY . .

# Build the TypeScript code to JavaScript
RUN npm run build

# Expose the port your Express app is running on (adjust this if necessary)
EXPOSE 3000

# Start the Express app
CMD ["npm", "start"]