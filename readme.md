# Space Program Mission Planner

## Overview

Space Program Mission Planner is a comprehensive web app designed to empower Kerbal Space Program (KSP) players, especially those using the Realism Overhaul mod, with an intuitive platform for planning and executing space missions. It abstracts complex astrodynamics into user-friendly tools, enabling both novices and aficionados to visualize and calculate key aspects of space exploration effortlessly.

## Problem

KSP and its Realism Overhaul mod, while deeply engaging, lack integrated, accessible tools for detailed mission planning. Players, many without formal astronautics training, face challenges in visualizing and calculating trajectories, fuel requirements, and communication networks, which are crucial for successful missions.

## User Profile

This planner caters to KSP players engaged with the Realism Overhaul mod, providing a versatile solution whether used on a second monitor, alt-tabbed during gameplay, or on mobile devices for on-the-go planning.

## Features

## Advanced Mission Planner

### User Story

- **Type of User**: Any player who wants to organize their Realistic Progression 1 (RP1) campaign or Realsim Overhaul (RO) playthrough in Kerbal Space Program (KSP).
- **Action**: Players can create, edit, archive, and delete their mission plans. Editing and viewing are integrated into a seamless experience where interacting with a mission detail immediately switches that element into an editable state. Saving happens automatically.
- **Benefit**: This feature enables players to meticulously plan, manage, and keep track of their mission plans, enhancing their gameplay and campaign organization.

### Functional Requirements

#### Data Inputs

- Mission details including names, descriptions, objectives, and timelines.
- Mission stages, both pre-launch and post-launch activities.
- Assignment of related crafts to specific missions, including selection from a list of launch complexes and locations (e.g., Kennedy Space Center, Wallops, Vandenberg, Kourou, etc.).

#### Behaviors

- **Automated Saving**: Changes made by the user are automatically saved to prevent data loss.
- **Dynamic Component for Editing**: The interface allows users to click on any part of the mission plan to edit that specific detail directly, transforming the view into an editable state for that element only.
- **Integrated Calculators and Tools**: Based on certain inputs like launch dates or mission objectives, the planner provides access to relevant calculators (e.g., transfer window calculator, resonant orbit calculator) to assist in mission planning.

#### Data Outputs

- Comprehensive details of planned missions, including all user-inputted information and any calculated data to support mission objectives.

### Acceptance Criteria

#### Minimum Functionality

- The ability to create, view/edit in a seamless component, and delete mission plans.
- Initially, the feature will not handle related entities like crafts or launch complexes directly; the focus is on the mission planning aspect.

#### Performance Metrics

- The application should be responsive on desktop and tablet platforms, prioritizing these devices due to the nature of the tool's use cases. Mobile responsiveness is considered a secondary objective.

#### Usability and Accessibility Standards

- The user interface should be intuitive, allowing users to easily interact with their mission plans.
- Basic accessibility considerations will be made to ensure the tool is usable by a wide audience. This includes clear labels, sufficient contrast ratios for text and background elements, and keyboard navigability for the core features.

# Craft Repository

## User Story

- **Type of User**: Users who wish to assign a craft to a mission they've created, focusing on those who plan their missions with specific crafts in mind.
- **Action**: Users can create, edit, and delete craft entries within the repository. The interface for viewing and editing is unified, allowing users to click directly on an attribute (e.g., the description) to switch it into an editable state. Saving changes is automated to ensure data is not lost inadvertently.
- **Benefit**: Enables users to plan their missions more effectively by considering specific crafts, enhancing the overall mission planning process and gameplay experience.

## Functional Requirements

### Data Inputs

- Detailed craft information including name, description, and specifications.
- Selection and/or assignment of related launch complexes and locations (e.g., Kennedy Space Center, Wallops, Vandenberg, Kourou, etc.).
- Option to add screenshots of the craft to provide visual references.

### Behaviors

- **Automated Saving**: Changes are saved automatically to prevent data loss.
- **Unified Edit and View Component**: The interface allows for seamless transition between viewing and editing states for individual craft details by simply clicking on the item to be edited.
- **Craft Management from Mission Page**: Users have the flexibility to create new crafts or edit existing ones directly from the mission creation/editing page, as well as from a dedicated craft page.

### Data Outputs

- Comprehensive details of the craft, including specifications, related launch complex assignments (if any), and visual screenshots.

## Acceptance Criteria

### Minimum Functionality

- Ability to create, view/edit in a unified component, and delete craft entries. Initial focus is on the craft itself without needing to link it to a specific launch complex or location.

### Performance Metrics

- The system should be responsive and capable of handling multiple concurrent users without significant degradation in performance.
- Craft details and images should load efficiently, providing a smooth user experience on desktop and tablet platforms. Mobile responsiveness is considered a secondary priority.

### Usability and Accessibility Standards

- The user interface for the craft repository should be intuitive, allowing users to easily navigate between creating, editing, and viewing crafts.
- Adherence to basic web accessibility standards (WCAG) to ensure the platform is usable by as broad an audience as possible, including but not limited to keyboard navigability, text alternatives for images, and sufficient contrast ratios.

## Implementation Notes

- A moderation or review system for new craft uploads could be beneficial to maintain the quality and relevance of the repository.
- Implementing data validation checks during the upload process will ensure that all necessary craft details are provided and adhere to expected formats or standards.


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

## Tech Stack

Frontend: React for dynamic user interfaces, HTML, and SCSS for styling.

Backend: Flask, a Python web framework for handling server-side operations OR React.

Libraries and Tools: Three.js for 3D visualizations, possibly D3.js for complex charting and data visualization.

## APIs

No external APIs planned for direct integration, focusing on in-house development for flexibility and customization. Maybe one for celestial body data.

## Sitemap

A single-page application (SPA) model with a modular tab system, allowing seamless navigation between tools and features without reloading the page.


## Mockups

![Mockup image](https://github.com/HMouaziz/KSP-MissionPlanner/blob/main/Screenshot-2024-03-15-01.png?raw=true)
![Mockup image](https://github.com/HMouaziz/KSP-MissionPlanner/blob/main/Screenshot-2024-03-15-02.png?raw=true)
![Mockup image](https://github.com/HMouaziz/KSP-MissionPlanner/blob/main/Screenshot-2024-03-15-03.png?raw=true)
![Mockup image](https://github.com/HMouaziz/KSP-MissionPlanner/blob/main/Screenshot-2024-03-15-04.png?raw=true)
![Mockup image](https://github.com/HMouaziz/KSP-MissionPlanner/blob/main/Screenshot-2024-03-15-05.png?raw=true)

## Data

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


## Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

???

## Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

yes

## Roadmap

The development will be broken down into sprints, focusing initially on setting up the foundational architecture, user authentication, and the mission planner. Subsequent sprints will add individual tools, starting with those of highest priority and complexity, followed by integration and refinement phases.

## Nice-to-haves

Real-Time KSP Data Integration: Linking the planner directly with KSP for real-time data exchange.

Advanced 3D Mission Visualization: Enhancing mission dashboards with detailed 3D models and animations.

Community Sharing Platform: Enabling users to share, rate, and discuss mission plans and spacecraft designs.
