# Olympic Games App

An Angular application that visualizes Olympic Games statistics per country.

------------------------------------------------------------------------

## Table of Contents
1.  [Overview](#overview)
2.  [Technology](#technology)
4.  [Development server](#development-server)
5.  [Build](#build)
7.  [Architecture](#architecture)
7.  [Project Structure](#project-structure)
8.  [Screenshots](#screenshots)

------------------------------------------------------------------------

## Overview

This application allows users to:
- View total medals per country (Dashboard)
- Visualize the evolution of medals over time for a selected country
- Handle invalid routes

Data is currently mocked using a local JSON file. The architecture is designed to support future integration with a real REST API.

------------------------------------------------------------------------

## Technology

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.6.
Don't forget to install your node_modules before starting (`npm install`).

------------------------------------------------------------------------

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

------------------------------------------------------------------------

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

------------------------------------------------------------------------

## Architecture

  Layer        Responsibility
  ------------ ------------------------------------------------
  Services     Data access (Singleton)
  Models       TypeScript typing
  Pages        Container components (routing + orchestration)
  Components   Reusable presentation components

------------------------------------------------------------------------

## Project Structure

  src/app/
  ├── core/
  │   ├── services/
  │   │   └── olympic.service.ts
  │   ├── models/
  │   │   ├── olympic.model.ts
  │   │   └── participation.model.ts
  │   ├── components/
  │   │   ├── header/
  │   │   ├── medal-chart/
  │   │   └── country-chart/
  │   └── app.constants.ts
  ├── pages/
  │   ├── home/
  │   ├── country/
  │   └── not-found/
  ├── app.component.ts
  └── app-routing.module.ts

------------------------------------------------------------------------

## Screenshots

### Desktop Version
![Dashboard Screenshot](screenshots\desktop-home.png)
![Country Screenshot](screenshots\desktop-country.png)
![Not Found Screenshot](screenshots\desktop-not-found.png)

### Mobile Version
![Dashboard Screenshot](screenshots\mobile-home.png)
![Country Screenshot](screenshots\mobile-country.png)
![Not Found Screenshot](screenshots\mobile-not-found.png)