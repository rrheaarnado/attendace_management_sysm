# enspace-hrms-ui
 HRMS Project

# Angular CLI Command Reference
 This document provides a summary of common Angular CLI commands for efficient development.

## Table of Contents
- [Generate Components, Services, and More](#generate-components-services-and-more)
- [Serve and Build Applications](#serve-and-build-applications)
- [Manage Dependencies](#manage-dependencies)
- [Testing](#testing)
- [Linting and Formatting](#linting-and-formatting)
- [Other Useful Commands](#other-useful-commands)

---

## Generate Components, Services, and More

### Generate a New Component
 ng g c component-name

### Generate a Service
 ng g s service-name

### Generate a Directive
 ng g d directive-name

### Generate a Pipe
 ng g p pipe-name

### Generate an Auth Guard
 ng g guard auth-guard

### Generate a Resolver
 ng g resolver resolver-name

### Generate a Module
 ng g m module-name

## Serve and Build Applications

### Start the Development Server
 ng serve

### Build the Project
 ng build

### Build for Production
 ng build --prod

## Manage Dependencies

### Install a Package
 npm install package-name

### Uninstall a Package
 npm uninstall package-name

## Testing
 ng test

### Run Unit Tests
 ng e2e

### Run End-to-End Tests

## Linting and Formatting

### Lint the Code
 ng lint

### Format the Code with Prettier (if installed)
 npx prettier --write .

## Other Useful Commands

### Generate Angular Environment Files
 ng g environments

### Create a New Angular Project
 ng new project-name

### Add Features to the Project
 ng add feature-name

### Update Angular to the Latest Version
 ng update

## Deployment

### Copy Build to Nginx Folder
 sudo cp -r /home/[machine-name]/Documents/projects/[project-folder]/dist/[build-folder]/* /var/www/[site-folder]/

### Reload Nginx
 sudo systemctl reload nginx