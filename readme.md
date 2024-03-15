# Space Program Mission Planner

## Overview

Space Program Mission Planner is a comprehensive web app designed to empower Kerbal Space Program (KSP) players, especially those using the Realism Overhaul mod, with an intuitive platform for planning and executing space missions. It abstracts complex astrodynamics into user-friendly tools, enabling both novices and aficionados to visualize and calculate key aspects of space exploration effortlessly.

### Problem

KSP and its Realism Overhaul mod, while deeply engaging, lack integrated, accessible tools for detailed mission planning. Players, many without formal astronautics training, face challenges in visualizing and calculating trajectories, fuel requirements, and communication networks, which are crucial for successful missions.

### User Profile

This planner caters to KSP players engaged with the Realism Overhaul mod, providing a versatile solution whether used on a second monitor, alt-tabbed during gameplay, or on mobile devices for on-the-go planning.

### Features

Advanced Mission Planner: A core feature allowing logged-in users to create, save, and manage detailed mission plans with integration options for real-time tracking.

Craft Repository: A user-contributed database of launch vehicles, satellites, and other payloads, including detailed specifications and designs.

Mission Calendar: Visual scheduling tool for planning missions, tracking launch windows, and celestial events.

DeltaV Calculator: Essential tool for calculating the required DeltaV for mission stages.

Solar Panel Darkside Calculator: Helps in planning energy requirements for missions involving solar-powered spacecraft.

Interplanetary Trajectory Calculator: Assists in planning interplanetary journeys, including gravity assists.

Communication Network Planner: Visualizes communication distances and helps design efficient communication networks.

Resonant Orbit Calculator: For satellite network planning, ensuring coverage and efficient positioning.

Launch Window Planner: Identifies optimal launch times for missions to various destinations.

Aerobrake Calculator: Aids in planning atmospheric entries and aerobraking maneuvers.

User Authentication: Secure system for user login, allowing personalized mission planning and saving.

Dynamic Tool Interaction: Tools dynamically interact based on user input, enhancing planning accuracy and efficiency.

Mission Dashboard: Detailed overview for each mission, including 3D visualizations of trajectories and mission stages


## Implementation

### Tech Stack

Frontend: React for dynamic user interfaces, HTML, and SCSS for styling.

Backend: Flask, a Python web framework for handling server-side operations OR React.

Libraries and Tools: Three.js for 3D visualizations, possibly D3.js for complex charting and data visualization.

### APIs

No external APIs planned for direct integration, focusing on in-house development for flexibility and customization. Maybe one for celestial body data.

### Sitemap

A single-page application (SPA) model with a modular tab system, allowing seamless navigation between tools and features without reloading the page.


### Mockups

![Mockup image](https://github.com/HMouaziz/KSP-MissionPlanner/blob/main/Screenshot-2024-03-15-01.png?raw=true)
![Mockup image](https://github.com/HMouaziz/KSP-MissionPlanner/blob/main/Screenshot-2024-03-15-02.png?raw=true)
![Mockup image](https://github.com/HMouaziz/KSP-MissionPlanner/blob/main/Screenshot-2024-03-15-03.png?raw=true)
![Mockup image](https://github.com/HMouaziz/KSP-MissionPlanner/blob/main/Screenshot-2024-03-15-04.png?raw=true)
![Mockup image](https://github.com/HMouaziz/KSP-MissionPlanner/blob/main/Screenshot-2024-03-15-05.png?raw=true)

### Data

1. Users

This table stores information about users of the app.

    UserID (Primary Key): Unique identifier for each user.
    Username: User's chosen name.
    Email: User's email address.
    PasswordHash: Hashed password for security.
    CreatedAt: Date and time the account was created.
    LastLogin: Date and time of the last login.

2. Missions

Stores details about each mission planned by users.

    MissionID (Primary Key): Unique identifier for each mission.
    UserID (Foreign Key): Links to the Users table.
    MissionName: Name of the mission.
    MissionDescription: Description or objectives of the mission.
    LaunchDate: Scheduled launch date.
    Destination: Target destination of the mission.
    CreatedAt: When the mission was created in the system.

3. CraftRepository

Holds information about different crafts that users can upload.

    CraftID (Primary Key): Unique identifier for each craft.
    UserID (Foreign Key): Links to the Users table, indicating who uploaded the craft.
    CraftName: Name of the craft.
    CraftType: Type of the craft (e.g., satellite, rover).
    Specifications: JSON or serialized data containing craft specifications.
    CreatedAt: Date and time the craft was uploaded.

4. MissionCrafts

Links missions to crafts and specifies which crafts are used in each mission.

    MissionCraftID (Primary Key): Unique identifier for each mission-craft relation.
    MissionID (Foreign Key): Links to the Missions table.
    CraftID (Foreign Key): Links to the CraftRepository table.
    Role: Role of the craft in the mission (e.g., primary payload, secondary payload).

5. ToolsData

Stores data generated by the tools for each mission, such as transfer windows, DeltaV calculations, etc.

    ToolsDataID (Primary Key): Unique identifier for each entry.
    MissionID (Foreign Key): Links to the Missions table.
    ToolType: Type of the tool (e.g., DeltaV Calculator, Transfer Window Planner).
    Data: JSON or serialized data containing the output from the tool.
    CreatedAt: When the tool data was generated.

6. UserSettings

Manages customizable user settings and preferences.

    SettingID (Primary Key): Unique identifier for each setting.
    UserID (Foreign Key): Links to the Users table.
    SettingName: Name of the setting.
    SettingValue: Value of the setting.

Relationships

    A User can have multiple Missions.
    A Mission can involve multiple Crafts through the MissionCrafts table.
    Each Mission can generate multiple sets of ToolsData depending on the tools used.


### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

???

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

yes

## Roadmap

The development will be broken down into sprints, focusing initially on setting up the foundational architecture, user authentication, and the mission planner. Subsequent sprints will add individual tools, starting with those of highest priority and complexity, followed by integration and refinement phases.

## Nice-to-haves

Real-Time KSP Data Integration: Linking the planner directly with KSP for real-time data exchange.

Advanced 3D Mission Visualization: Enhancing mission dashboards with detailed 3D models and animations.

Community Sharing Platform: Enabling users to share, rate, and discuss mission plans and spacecraft designs.
