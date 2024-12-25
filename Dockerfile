# Use Node.js LTS version
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 8061
EXPOSE 8061

# Start the application
CMD ["npm", "start", "--", "-p", "8061"]
