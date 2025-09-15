# ERP Gas Station

This software is an ERP (Enterprise Resource Planning) developed as part of a school project, where we adopted agile methodologies for its implementation. We followed a complete process, from requirements analysis to design, including sprint and task planning.

## Context

We started by analyzing requirements to produce user stories, then organized these stories into sprints and product backlogs. Roles such as Scrum Master, Product Owner, etc., were assigned to ensure efficient project management.

## Features

This ERP provides various functionalities, including:

- Start/stop fuel pumps
- Request refueling (fuel and products)
- Issue loyalty and credit cards
- Manage purchases and payments
- View and update product inventory
- Receive incident alerts
- Get directives from regional management
- Organize peer-to-peer services

## Interfaces

We designed two types of dashboards: one for the employee and one for the manager, with additional information available for the latter. Here are some screenshots:

### Login Interface
![Login Interface](https://github.com/RayanOUTILI/ERP_station_service/assets/59539437/c71c2b40-f98f-4ba4-9899-3cc77cf41c56)

### Dashboard
![Dashboard](https://github.com/RayanOUTILI/ERP_station_service/assets/59539437/9548af2c-4020-4f54-9897-0732619f2627)

### Component - Tank Status
![Tank Status](https://github.com/RayanOUTILI/ERP_station_service/assets/59539437/afa5f17f-61ea-44a9-9b18-4756859b78d9)

## Design Constraints

A major design constraint was to keep the cash register constantly fixed on the left side of the screen while displaying other components on the right side of the interface. Each component was designed to be extendable, allowing it to occupy the entire right-hand side of the screen if needed. This approach ensures quick (one-click) access to specific functionalities of each component while maintaining the duality between the cash register and the other ERP features.

## Technologies Used

- **Front-end**: ReactJS / CSS
- **Back-end**: NodeJS with the Express framework
- **Database**: PostgreSQL
- **Hosting**: Heroku

---
## Authors
[Tom Da Costa](https://github.com/Tom-DaCosta)  
[Sabra Essalah](https://github.com/sabraess)  
[Matthieu Griffonnet](https://github.com/Matt-Griff)  
[Rayan Outili](https://github.com/RayanOUTILI)  
[Thomas Portelette](https://github.com/ThomasPorteletteGit)  
[Clara Torri](https://github.com/clarator)  
[Lucas Wallner]()  
