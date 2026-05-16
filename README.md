# vehicle-feature-forecast-dashboard
A vehicle feature forecast dashboard for a technical assessment. A small, production-minded full stack application that stores, filters, and summarizes vehicle feature forecast records.

## Frontend
Angular app in `/vffs-ui`

## Backend
Spring Boot app in `/vffd-api`

## Start Backend
cd vffd-api
./mvnw spring-boot:run

## Start Frontend
cd vffd-ui
npm install
npm start

## Database
docker compose up -d