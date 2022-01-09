
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![API Build](https://github.com/heidichiu/bookworld/actions/workflows/deploy-api.yml/badge.svg)
![Frontend Build](https://github.com/heidichiu/bookworld/actions/workflows/deploy-frontend.yml/badge.svg)

[View live here](https://bookworld-client.herokuapp.com/)


# Motivation 🔥

* Practicing Test-driven Development
* Implementing CI/CD to build, test and deploy automatically

# Quality ✨

* Tested with Jest and JUnit
* Continuous integration

# Stack used 🧮
## Frontend
* React (functional components & hooks)
* Redux
* Material UI for styling
* React Testing Library

## Backend
* Spring Boot
* Spring Security
* Lombok
* Gradle
* JUnit, Mockito and Jacoco

## Infra
* Continuous integration and deployment with GitHub Actions


# Development setup

## Java
* OpenJDK version 1.8 or later
* Gradle version 7+

```bash
./gradlew bootRun

```
API is available at `http://localhost:8080/api/v1/`

## React
```bash
cd frontend
npm install
npm run dev
```
React app is available at `http://localhost:3000`

## Testing
Run Java tests and coverage
```bash
./gradlew check
```
Run Jest tests and coverage
```bash
npm run test:nowatch
```