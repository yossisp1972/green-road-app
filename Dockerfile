# Build frontend
FROM node:18 AS frontend-build
WORKDIR /frontend
# COPY frontend/package.json frontend/package-lock.json ./
RUN apt-get update && apt-get install -y dos2unix \
	&& npm install \
	&& find ./node_modules/.bin -type f -exec dos2unix {} \; \
	&& chmod -R +x ./node_modules/.bin
COPY frontend/ ./
RUN npm run build

# Backend image
FROM python:3.10-slim
WORKDIR /app

# Install Python dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend code
COPY app.py ./

# Copy frontend build
COPY --from=frontend-build /frontend/build ./frontend_build

EXPOSE 5000

CMD ["python", "app.py"]
