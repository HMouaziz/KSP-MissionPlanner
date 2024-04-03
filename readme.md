# Overview

Space Program Mission Planner is a comprehensive web app designed to empower Kerbal Space Program (KSP) players, especially those using the Realism Overhaul mod, with an intuitive platform for planning and executing space missions. It abstracts complex astrodynamics into user-friendly tools, enabling both novices and aficionados to visualize and calculate key aspects of space exploration effortlessly.

# Problem

KSP and its Realism Overhaul mod, while deeply engaging, lack integrated, accessible tools for detailed mission planning. Players, many without formal astronautics training, face challenges in visualizing and calculating trajectories, fuel requirements, and communication networks, which are crucial for successful missions.

# User Profile

This planner caters to KSP players engaged with the Realism Overhaul mod, providing a versatile solution whether used on a second monitor, alt-tabbed during gameplay, or on mobile devices for on-the-go planning.

# Features

## 1. Mission Dashboard

### 1.1 User Story

- **Type of User**: Players overseeing multiple simulated missions within Kerbal Space Program, requiring a central hub to view and manage mission plans, without relying on real-world time constraints.
- **Action**: Users leverage the dashboard to get an overview of their simulated missions, including planned maneuvers, spacecraft statuses, and mission progress, all managed within the game's simulated time framework.
- **Benefit**: Facilitates efficient management and coordination of various missions in a simulated environment, allowing for strategic planning and adjustments without the limitations of real-world time, enhancing gameplay and mission success.

### 1.2 Functional Requirements

#### Data Inputs

- Simulated mission data, including planned maneuvers, spacecraft configurations, and mission objectives.
- Outputs from planning tools like the DeltaV calculator, communication network planner, and trajectory predictions, adjusted for the game's time scale.

#### Behaviors

- **Simulated Mission Overview**: Provides a summary of ongoing and upcoming missions within the game's simulation, highlighting critical parameters and progress.
- **Adjustment to Simulated Time**: Integrates data relevant to the game's simulated timeline, ensuring planning and adjustments are coherent with in-game mechanics.
- **Dynamic Updates**: Reflects changes in mission planning or progress, maintaining accuracy within the simulated time context.
- **Customizable Simulation View**: Allows customization to focus on specific aspects of missions or planning tools, tailored to the user's strategic preferences.

#### Data Outputs

- Consolidated view of missions and related planning calculations, presented within the context of Kerbal Space Program's simulated time environment.
- Enhanced visualization of simulated mission timelines and critical events, supporting strategic planning without real-world time constraints.

### 1.3 Acceptance Criteria

#### Minimum Functionality

- Display of a unified mission overview, incorporating various simulated mission planning tools and data, coherent within the game's simulated time framework.
- Effective visualization and management of simulated mission timelines and events.

#### Performance Metrics

- Responsive and accurate representation of simulated mission data, allowing for real-time (in-game) adjustments and updates.
- Intuitive interface design, facilitating easy navigation and customization by the user.

#### Usability and Accessibility Standards

- Design that prioritizes ease of use, enabling players to efficiently manage and plan missions within the game's simulation.
- Adherence to accessibility standards, ensuring the tool is usable by players with diverse needs, including compatibility with assistive technologies.

### 1.4 Implementation Notes

- Develop the dashboard with a flexible architecture to easily accommodate data from various in-game planning tools, ensuring seamless integration and updates.
- Explore potential for future enhancements that further bridge the gap between simulated mission management and real-world planning techniques, enriching the player's strategic experience.


## 2. Advanced Mission Planner

### 2.1 User Story

- **Type of User**: Any player who wants to organize their Realistic Progression 1 (RP1) campaign or Realsim Overhaul (RO) playthrough in Kerbal Space Program (KSP).
- **Action**: Players can create, edit, archive, and delete their mission plans. Editing and viewing are integrated into a seamless experience where interacting with a mission detail immediately switches that element into an editable state. Saving happens automatically.
- **Benefit**: This feature enables players to meticulously plan, manage, and keep track of their mission plans, enhancing their gameplay and campaign organization.

### 2.2 Functional Requirements

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

### 2.3 Acceptance Criteria

#### Minimum Functionality

- The ability to create, view/edit in a seamless component, and delete mission plans.
- Initially, the feature will not handle related entities like crafts or launch complexes directly; the focus is on the mission planning aspect.

#### Performance Metrics

- The application should be responsive on desktop and tablet platforms, prioritizing these devices due to the nature of the tool's use cases. Mobile responsiveness is considered a secondary objective.

#### Usability and Accessibility Standards

- The user interface should be intuitive, allowing users to easily interact with their mission plans.
- Basic accessibility considerations will be made to ensure the tool is usable by a wide audience. This includes clear labels, sufficient contrast ratios for text and background elements, and keyboard navigability for the core features.

## 3. Craft Repository

### 3.1 User Story

- **Type of User**: Users who wish to assign a craft to a mission they've created, focusing on those who plan their missions with specific crafts in mind.
- **Action**: Users can create, edit, and delete craft entries within the repository. The interface for viewing and editing is unified, allowing users to click directly on an attribute (e.g., the description) to switch it into an editable state. Saving changes is automated to ensure data is not lost inadvertently.
- **Benefit**: Enables users to plan their missions more effectively by considering specific crafts, enhancing the overall mission planning process and gameplay experience.

### 3.2 Functional Requirements

#### Data Inputs

- Detailed craft information including name, description, and specifications.
- Selection and/or assignment of related launch complexes and locations (e.g., Kennedy Space Center, Wallops, Vandenberg, Kourou, etc.).
- Option to add screenshots of the craft to provide visual references.

#### Behaviors

- **Automated Saving**: Changes are saved automatically to prevent data loss.
- **Unified Edit and View Component**: The interface allows for seamless transition between viewing and editing states for individual craft details by simply clicking on the item to be edited.
- **Craft Management from Mission Page**: Users have the flexibility to create new crafts or edit existing ones directly from the mission creation/editing page, as well as from a dedicated craft page.

#### Data Outputs

- Comprehensive details of the craft, including specifications, related launch complex assignments (if any), and visual screenshots.

### 3.3 Acceptance Criteria

#### Minimum Functionality

- Ability to create, view/edit in a unified component, and delete craft entries. Initial focus is on the craft itself without needing to link it to a specific launch complex or location.

#### Performance Metrics

- The system should be responsive and capable of handling multiple concurrent users without significant degradation in performance.
- Craft details and images should load efficiently, providing a smooth user experience on desktop and tablet platforms. Mobile responsiveness is considered a secondary priority.

#### Usability and Accessibility Standards

- The user interface for the craft repository should be intuitive, allowing users to easily navigate between creating, editing, and viewing crafts.
- Adherence to basic web accessibility standards (WCAG) to ensure the platform is usable by as broad an audience as possible, including but not limited to keyboard navigability, text alternatives for images, and sufficient contrast ratios.

### 3.4 Implementation Notes

- A moderation or review system for new craft uploads could be beneficial to maintain the quality and relevance of the repository.
- Implementing data validation checks during the upload process will ensure that all necessary craft details are provided and adhere to expected formats or standards.

### 4. Mission Calendar 

### 4.1 User Story

- **Type of User**: Users engaged in planning and scheduling within the Kerbal Space Program, who value a visual approach to organizing their missions and related activities.
- **Action**: Users have the capability to view schedules in a calendar format, with flexibility in viewing options (day, week, month, year). Utilities for highlighting and tagging time periods for specific planning purposes are essential, considering the simulation-based nature of the game where "current time" is a variable managed by the user. The calendar should facilitate planning by allowing users to manually input and adjust mission events and timelines.
- **Benefit**: This feature empowers users to visually plan and manage their space program's activities, enhancing their strategic decision-making process by providing a comprehensive overview of their scheduled missions and significant events.

### 4.2 Functional Requirements

##### Data Inputs

- **Manual Event Creation**: Users can manually create events or mission schedules on the calendar, accommodating the game's nature where time is a user-managed element.
- **Highlighting and Tagging**: Allows for marking specific time periods for events or objectives, providing visual cues for planning.

#### Behaviors

- **Flexible View Modes**: Users can switch between day, week, month, and year views to suit their planning needs.
- **Direct Editing Links**: Events on the calendar link to editing pages or modals, allowing for detailed planning and adjustments.
- **Customization of Event Displays**: Users can toggle the visibility of specific event types or planned activities to streamline their planning view.

#### Data Outputs

- Organizes and displays mission schedules and planning events in a user-friendly visual format, without generating new data outputs.

### 4.3 Acceptance Criteria

#### Minimum Functionality

- The core functionality includes the ability to view, manually input, and adjust events within the calendar in various view modes, without relying on real-time alerts or tracking of "ongoing" missions.

#### Performance Metrics

- Efficiency in loading and updating the calendar view is crucial, ensuring a seamless planning experience.
- Desktop optimization remains a priority, with consideration for tablet compatibility due to the detailed nature of mission planning.

#### Usability and Accessibility Standards

- Intuitive navigation and ease of use are essential, with clear instructions for manually adding or adjusting events.
- The calendar must adhere to web accessibility standards, ensuring inclusivity for all users, including those with disabilities.

### 4.4 Implementation Notes

- Given the simulation context, the calendar's design should emphasize manual input and adjustment capabilities, acknowledging that "current time" and mission progress are uniquely managed by the user.
- Future development could explore enhanced customization options, allowing users to create highly personalized planning views that reflect their specific campaign strategies and objectives.

## 5. DeltaV Calculator

### 5.1 User Story

- **Type of User**: Players planning missions within Kerbal Space Program, especially those engaging with the Realism Overhaul mod, who require accurate DeltaV calculations for their spacecraft maneuvers.
- **Action**: Users input necessary spacecraft and mission parameters into the calculator, which then computes the required DeltaV for the mission.
- **Benefit**: Enables precise mission planning by ensuring spacecraft have adequate DeltaV for all planned maneuvers, enhancing mission success rates and player understanding of space travel complexities.

### 5.2 Functional Requirements

#### Data Inputs

- Spacecraft mass, including wet and dry mass.
- Engine specifications, particularly specific impulse (Isp).
- Mission parameters influencing DeltaV, such as target orbit altitude or transfer orbit specifics.

#### Behaviors

- **Calculation Process**: Utilizes input data to calculate DeltaV based on the rocket equation and relevant astrodynamics formulas.
- **Interactive Elements**: Allows for real-time adjustment of parameters to explore their impact on DeltaV requirements, promoting a deeper comprehension of mission planning aspects.
- **Integration with Mission Planner**: Direct application of calculated DeltaV into mission plans, facilitating streamlined planning processes.

#### Data Outputs

- Calculated DeltaV necessary for the planned mission, presented in an easily understandable format.
- Optional: Estimated burn times for maneuvers based on engine thrust and spacecraft mass.

### 5.3 Acceptance Criteria

#### Minimum Functionality

- Capability for users to enter spacecraft and mission details to receive accurate DeltaV calculations.
- Display of calculated DeltaV in a clear, concise manner.

#### Performance Metrics

- Immediate feedback and calculations as user inputs are modified.
- User-friendly interface that accommodates users with varying levels of astrodynamics knowledge.

#### Usability and Accessibility Standards

- Intuitive design with straightforward instructions for inputting data.
- Compliance with web accessibility standards to ensure tool usability across a broad spectrum of users, including features for keyboard navigation and screen reader support.

### 5.4 Implementation Notes

- Ensure calculation accuracy, possibly by incorporating advanced astrodynamical formulas for in-depth planning needs.
- Consider future enhancements like saving calculation outcomes directly to mission plans or auto-fetching spacecraft specs from a craft repository for simplified calculations.


## 6. Communication Network Planner

### 6.1 User Story

- **Type of User**: Players focusing on designing and managing satellite networks and communication systems in their space missions within Kerbal Space Program, especially with realism-enhancing mods.
- **Action**: Users input details about their spacecraft, satellites, and desired network configurations to plan and visualize efficient communication links, including optimal satellite positioning and line-of-sight analyses.
- **Benefit**: Ensures continuous and robust communication for missions, critical for effective mission control and data handling, enhancing overall mission success.

### 6.2 Functional Requirements

#### Data Inputs

- Specifications for satellites and ground stations, including orbital parameters and communication capabilities.
- Desired coverage objectives or specific communication targets.

#### Behaviors

- **Network Visualization**: Displays a graphical representation of the communication network, showing satellites, ground stations, and their interaction.
- **Optimal Positioning Calculations**: Offers calculations for the best satellite positions to achieve comprehensive coverage and efficient communication.
- **Line-of-Sight Analysis**: Analyzes and visualizes line-of-sight connections between network elements to identify communication gaps.

#### Data Outputs

- A comprehensive plan for the communication network, detailing satellite placements and coverage zones.
- Results from the line-of-sight analysis, highlighting potential communication blackout areas.

### 6.3 Acceptance Criteria

#### Minimum Functionality

- Capability for users to input satellite and ground station data for network planning.
- Accurate suggestions for satellite positioning to ensure effective communication coverage.

#### Performance Metrics

- Efficient processing of network planning and visualization, with immediate updates upon parameter adjustments.
- User-friendly interface that simplifies the complexities of communication network planning.

#### Usability and Accessibility Standards

- The planner should be straightforward to use, with instructions for entering network parameters and understanding the outputs.
- Compliance with web accessibility standards, making the tool accessible for users with disabilities, including screen reader compatibility and alternative input methods support.

### 6.4 Implementation Notes

- The planner should be adaptable to a variety of mission types, including those that require interplanetary communication networks.
- Consider future integrations with other mission planning tools to allow for a holistic approach to mission design, including communication strategies.


## 7. Solar Panel Darkside Calculator

### 7.1 User Story

- **Type of User**: Kerbal Space Program players planning missions with solar-powered spacecraft, focusing on maintaining power during periods of darkness caused by orbital eclipses or planetary rotations.
- **Action**: Users input spacecraft orbital parameters and solar panel details to calculate the duration of darkness experienced and the energy reserves required to sustain operations until sunlight is available again.
- **Benefit**: Ensures continuous operation of spacecraft by planning efficient solar panel configurations and energy storage solutions, improving mission reliability and success.

### 7.2 Functional Requirements

#### Data Inputs

- Orbital parameters of the spacecraft, such as altitude, inclination, and the celestial body it orbits.
- Specifications of the spacecraft's solar panels, including power output and surface area.
- Information on the spacecraft’s energy needs and storage capacity.

#### Behaviors

- **Darkness Duration Calculation**: Determines the expected time the spacecraft will spend in the shadow of a celestial body.
- **Energy Reserve Calculation**: Estimates the energy needed to maintain essential functions during periods without sunlight.
- **Solar Panel Configuration Recommendations**: Suggests optimal solar panel setups to ensure adequate energy generation and storage based on the calculated requirements.

#### Data Outputs

- Time in darkness for the specified orbital path.
- Required energy reserves to sustain the spacecraft during periods of darkness.
- Recommendations for arranging solar panels to maximize energy generation and storage efficiency.

### 7.3 Acceptance Criteria

#### Minimum Functionality

- Ability to calculate the darkness duration and necessary energy reserves for spacecraft in specified orbits.
- Provision of practical recommendations for solar panel configurations to optimize energy availability.

#### Performance Metrics

- Rapid and accurate performance of necessary calculations, with immediate updates for input adjustments.
- User-friendly interface facilitating straightforward data input and result interpretation.

#### Usability and Accessibility Standards

- Simple, direct instructions for entering data and understanding outputs.
- Compliance with web accessibility guidelines to ensure tool usability for a diverse user base, including those with disabilities.

### 7.4 Implementation Notes

- Account for the variability in shadow periods across different orbits and celestial bodies, possibly by including a database of celestial characteristics for enhanced calculation accuracy.
- Future integration with broader mission planning tools could allow for seamless application of the calculator's recommendations in mission designs.


## 8. Launch Window Planner

### 8.1 User Story

- **Type of User**: Players planning interplanetary or specific orbital missions in Kerbal Space Program, seeking precise launch timing to maximize fuel efficiency and achieve mission objectives.
- **Action**: Inputs include the mission's starting point, destination, and desired outcomes, with the tool calculating optimal launch windows considering planetary alignments and trajectory requirements.
- **Benefit**: Facilitates efficient resource use by identifying the most favorable conditions for launch, supporting higher mission success rates and enabling ambitious mission designs.

### 8.2 Functional Requirements

#### Data Inputs

- Starting location and intended mission destination.
- Desired mission outcomes (e.g., spacecraft rendezvous, landing, specific orbit entry).
- Constraints affecting launch timing (mission duration limits, spacecraft capabilities).

#### Behaviors

- **Launch Window Calculation**: Determines optimal launch times based on celestial dynamics and mission parameters.
- **Trajectory Visualization**: Provides visual representations of suggested trajectories during identified launch windows.
- **Adjustable Parameters**: Enables tweaking of mission inputs to explore their impact on launch windows and trajectories.

#### Data Outputs

- List of optimal launch windows with specific dates and times.
- Trajectory visualizations for the journey from start to destination within the optimal windows.

### 8.3 Acceptance Criteria

#### Minimum Functionality

- Calculation and presentation of optimal launch windows tailored to user-defined mission specifics.
- Trajectory visualization support for enhanced planning.

#### Performance Metrics

- Rapid and precise calculation of launch windows, accommodating complex mission scenarios.
- User-friendly interface facilitating straightforward adjustments to mission parameters and interpretation of outcomes.

#### Usability and Accessibility Standards

- Intuitive guidance for data entry and result interpretation.
- Compliance with web accessibility guidelines, ensuring usability for users with diverse needs, including those with disabilities.

### 8.4 Implementation Notes

- Advanced orbital mechanics modeling could be incorporated to refine launch window predictions.
- Potential future integration with a mission planning tool to allow direct application of calculated launch windows to mission designs.


## 9. Aerobrake Calculator

### 9.1 User Story

- **Type of User**: Players who are planning atmospheric entry or aerobraking maneuvers in Kerbal Space Program, particularly those engaging with realism mods that complicate these processes.
- **Action**: Inputs include the spacecraft's entry parameters and the atmosphere's characteristics of the celestial body being approached. The calculator then determines the optimal entry angles, speeds, and other relevant parameters for a successful aerobrake or atmospheric entry.
- **Benefit**: Enables precise planning of atmospheric entries and aerobraking maneuvers, reducing the risk of catastrophic failures and improving mission success rates.

### 9.2 Functional Requirements

#### Data Inputs

- Spacecraft characteristics, including mass, shape, and heat shield capabilities.
- Entry parameters, such as approach speed and desired orbit after aerobraking.
- Atmospheric properties of the celestial body, including density and composition.

#### Behaviors

- **Optimal Entry Calculation**: Computes the optimal entry angles and speeds for successful aerobraking or atmospheric entry, considering the spacecraft's capabilities and atmospheric conditions.
- **Heat Load Analysis**: Estimates the thermal load on the spacecraft during entry, ensuring the heat shield and other protective measures are adequate.
- **Trajectory Visualization**: Provides a graphical representation of the expected trajectory during aerobraking or entry, highlighting key phases and potential risks.

#### Data Outputs

- Recommendations for entry angles and speeds for aerobraking or atmospheric entries.
- Analysis of expected thermal loads and the adequacy of heat shielding.
- Visualized entry or aerobraking trajectory, illustrating the spacecraft's path through the atmosphere.

### 9.3 Acceptance Criteria

#### Minimum Functionality

- Calculation of optimal entry parameters for aerobraking or atmospheric entry based on user-defined spacecraft and mission parameters.
- Estimation of thermal loads to validate heat shield design and entry strategy.

#### Performance Metrics

- Quick and accurate processing of atmospheric entry calculations, allowing for real-time adjustments and planning.
- Intuitive interface that simplifies the complexity of atmospheric entry dynamics for users without extensive aerospace engineering knowledge.

#### Usability and Accessibility Standards

- Clear, user-friendly guidance for entering spacecraft and atmospheric data, with visual aids to help interpret results.
- Adherence to web accessibility standards, ensuring the tool is accessible for users with disabilities, including screen reader compatibility and keyboard navigability.

### 9.4 Implementation Notes

- Incorporate a comprehensive database of atmospheric properties for various celestial bodies within Kerbal Space Program to enhance calculation accuracy.
- Future enhancements could include integration with mission planning tools, allowing for seamless application of aerobrake calculations to overall mission design.


## 10. Resonant Orbit Calculator

### 10.1 User Story

- **Type of User**: Players setting up satellite constellations in Kerbal Space Program, who need to evenly space satellites around a planet or moon to ensure continuous coverage or communication.
- **Action**: Users input the number of satellites, the target celestial body, and the desired coverage area. The calculator then determines the necessary orbital parameters for each satellite to achieve a resonant orbit, ensuring even spacing and continuous coverage.
- **Benefit**: Facilitates the efficient planning and deployment of satellite constellations, optimizing coverage and communication networks in the game.

### 10.2 Functional Requirements

#### Data Inputs

- Desired number of satellites in the constellation.
- Target celestial body for the satellite constellation.
- Specific requirements for coverage or communication objectives.

#### Behaviors

- **Orbital Parameter Calculation**: Determines the optimal orbits for the satellites to maintain even spacing around the target celestial body.
- **Coverage Analysis**: Estimates the coverage area of the constellation to ensure it meets the desired objectives.
- **Adjustable Parameters**: Allows users to modify input values to explore different constellation configurations and their impact on coverage.

#### Data Outputs

- Calculated orbital parameters for each satellite to achieve resonant orbits.
- Visualization of the satellite constellation around the celestial body, indicating coverage areas.
- Recommendations for adjustments to improve coverage or efficiency of the constellation.

### 10.3 Acceptance Criteria

#### Minimum Functionality

- Ability to calculate and provide resonant orbital parameters for satellite constellations based on user-defined criteria.
- Visualization of constellation layout and coverage areas.

#### Performance Metrics

- Accurate and fast calculations of orbital parameters, allowing users to quickly plan and adjust satellite constellations.
- User-friendly interface that simplifies the planning process for users at all levels of experience.

#### Usability and Accessibility Standards

- Intuitive input and result interpretation, supported by visual aids and clear, concise instructions.
- Compliance with web accessibility standards, ensuring the tool is usable for users with disabilities, including provisions for keyboard navigation and screen reader support.

### 10.4 Implementation Notes

- Consider incorporating a database of celestial bodies within Kerbal Space Program, including their gravitational parameters, to enhance calculation precision.
- Future developments could include integration with the craft design and mission planning tools, allowing for a holistic approach to satellite mission planning.


## 11. Interplanetary Trajectory Calculator

### 11.1 User Story

- **Type of User**: Kerbal Space Program players engaged in planning interplanetary missions, seeking to optimize their trajectories between celestial bodies for efficiency and mission success.
- **Action**: Users input the departure and destination points, along with the desired timeframe for the mission. The calculator processes these inputs to determine the most fuel-efficient transfer orbits, including Hohmann and bi-elliptical transfers, and identifies optimal transfer windows.
- **Benefit**: Enables precise mission planning by identifying the best trajectories and launch windows for interplanetary travel, saving fuel and resources while increasing the likelihood of mission success.

### 11.2 Functional Requirements

#### Data Inputs

- Departure and destination celestial bodies within the Kerbal Space Program universe.
- Desired mission launch timeframe or window.
- Spacecraft details that may affect trajectory planning, such as total delta-v capacity.

#### Behaviors

- **Transfer Orbit Calculation**: Computes the most efficient transfer orbits for given mission parameters, considering both Hohmann transfers and, where applicable, bi-elliptical transfers.
- **Transfer Window Identification**: Identifies upcoming transfer windows that align with the calculated optimal trajectories.
- **Fuel Efficiency Analysis**: Estimates the fuel requirements for the planned interplanetary trajectory, helping users plan their missions within the constraints of their spacecraft's capabilities.

#### Data Outputs

- Optimal transfer orbits and corresponding launch windows for the planned mission.
- Visual representation of the planned trajectory, including key maneuvers and celestial alignments.
- Estimated fuel requirements for executing the planned interplanetary transfer.

### 11.3 Acceptance Criteria

#### Minimum Functionality

- Calculation of efficient transfer orbits and identification of corresponding optimal launch windows.
- Estimation of fuel requirements to ensure spacecraft capability alignment with mission planning.

#### Performance Metrics

- Fast and accurate trajectory calculations, providing real-time feedback as mission parameters are adjusted.
- Intuitive and user-friendly interface, enabling straightforward mission planning for players of all experience levels.

#### Usability and Accessibility Standards

- Simple, clear instructions for inputting mission details and understanding calculation results.
- Adherence to web accessibility guidelines, ensuring tool usability for a broad range of players, including those with disabilities.

### 11.4 Implementation Notes

- Incorporation of a comprehensive celestial database from Kerbal Space Program to enhance trajectory calculation accuracy.
- Future expansions could include more detailed planning features, such as accounting for planetary alignments and gravity assists from moons or other celestial bodies.

## 12. User Authentication

### 12.1  User Story

- **Type of User**: All players of Kerbal Space Program using the mission planning application, requiring secure access to their personal mission plans, crafts, and planning tools.
- **Action**: Users can create an account, log in to access their personalized dashboard, manage their mission plans, and save their crafts and calculations. Authentication ensures that user data is securely stored and accessed.
- **Benefit**: Provides a secure, personalized experience for users, allowing for the safe storage and retrieval of mission data and user preferences, enhancing the overall usability of the application.

### 12.2 Functional Requirements

#### Data Inputs

- User registration details, including email and password.
- Login credentials for returning users.

#### Behaviors

- **Account Creation**: New users can register for an account using their email address, creating a unique login with a password.
- **Secure Login Process**: Users log in to their accounts using their credentials, with security measures in place to protect their information.
- **Session Management**: Maintains user session for continuity of experience, with options for logging out.

#### Data Outputs

- Confirmation of successful account creation or login.
- User-specific data and settings displayed upon successful authentication.

### 12.3 Acceptance Criteria

#### Minimum Functionality

- Secure and efficient account creation and login process.
- Reliable session management for user continuity.

#### Performance Metrics

- Quick response times for login and account creation processes.
- High security standards to protect user data and prevent unauthorized access.

#### Usability and Accessibility Standards

- Intuitive interface for account creation and login.
- Adherence to web accessibility standards, ensuring the authentication process is accessible to all users.

### 12.4 Implementation Notes

- Implement modern security practices, such as encrypted passwords and possibly two-factor authentication, to enhance user data protection.
- Consider integrating with third-party authentication services for enhanced security and user convenience.


## 13. 3D Visualizer for Planning Tools

### 13.1 User Story

- **Type of User**: Kerbal Space Program players engaged in mission planning who require a visual representation of trajectories, orbits, and communication ranges to make informed decisions about their missions.
- **Action**: Users can view dynamic 3D visualizations of spacecraft trajectories, orbit resonances, and communication network coverage directly within the application. This tool interacts with various planning tools to render accurate spatial data based on user-defined parameters and calculations.
- **Benefit**: Enhances understanding and planning of missions by providing a visual and intuitive representation of complex spatial data, allowing users to optimize their mission plans effectively.

### 13.2 Functional Requirements

#### Data Inputs

- Calculated data from the Interplanetary Trajectory Calculator, Resonant Orbit Calculator, and Communication Network Planner.
- User-defined parameters for missions, including launch points, destinations, satellite positions, and desired communication coverage areas.

#### Behaviors

- **Dynamic 3D Rendering**: Generates real-time 3D visualizations of spacecraft trajectories, satellite orbits, and communication coverage areas based on the latest calculations and user inputs.
- **Interactive Exploration**: Allows users to interact with the visualizations, including rotating, zooming, and selecting specific elements for more detailed information.
- **Integration with Planning Tools**: Seamlessly integrates with other planning tools, updating visualizations as new data becomes available or parameters are adjusted.

#### Data Outputs

- Interactive 3D visualizations of mission-related spatial data, viewable directly within the user's browser.
- Detailed visual insights into mission planning elements, such as optimal launch windows, satellite network configurations, and interplanetary trajectories.

### 13.3 Acceptance Criteria

#### Minimum Functionality

- Ability to render accurate and interactive 3D visualizations of trajectories, orbits, and communication ranges based on inputs from associated planning tools.
- Smooth integration with planning tools, ensuring that visualizations reflect the most current calculations and mission plans.

#### Performance Metrics

- Visualizations should render efficiently, with minimal latency, to provide a smooth user experience.
- The tool should be optimized for web performance, ensuring compatibility across a wide range of devices and browsers.

#### Usability and Accessibility Standards

- The interface for interacting with the 3D visualizations should be intuitive, with straightforward controls for exploration and analysis.
- Consideration of accessibility in the design of the visualization tool, ensuring that it is usable for as broad an audience as possible.

### 13.4 Implementation Notes

- Leverage Three.js for efficient 3D rendering in the web environment.
- Consider the scalability of the visualizer to accommodate future enhancements, such as additional visualization types or more detailed spatial data.
- Optimize data handling between the backend and frontend to manage the potentially large datasets involved in rendering complex 3D scenes.




# Implementation

## Frontend Technologies

- **React**: Core library for UI development.
- **Vite**: Build tool for a fast development experience.
- **React Router**: For managing application routing.
- **react-three-fiber (R3F)**: For integrating 3D content using Three.js in React.
- **Fetch API**: For making HTTP requests to the backend.
- **Material UI or ShadcnUI**: Chosen UI framework for component library.
- **Tailwind CSS**: For styling and layout with a utility-first CSS framework.

## Backend Technologies

- **Express**: Web framework for Node.js, facilitating API development.
- **Node.js**: JavaScript runtime for executing JavaScript on the server-side.
- **MySQL**: Database for storing and managing application data.
- **Redis**: Database for storing authentication and session management data.
- **Knex**: SQL query builder supporting MySQL, for easier database interactions.
- **JSON Web Tokens (JWT)**: For handling authentication and securing API endpoints.
- **bcrypt**: For password hashing and security.
- **dotenv**: For managing environment variables.

## Development Tools

- **Git**: Version control system.
- **GitHub**: Platform for hosting code repositories and version control.
- **Postman**: API development and testing tool.
- **Vite**: Also used as a development tool for the frontend.
- **ESLint and Prettier**: Tools for code quality and formatting.

## Deployment Technologies

- **AWS** or **Microsoft Azure**: Cloud platforms for deploying the web application and database, offering a range of services for scalable web application hosting.


# APIs

No external APIs planned for direct integration, focusing on in-house development for flexibility and customization.

# Sitemap

## Public Pages
- **Home Page**: Introduction to the application, highlighting key features.
- **Login Page**: Where users can log in to access their personalized dashboard.
- **Registration Modal**: Allows new users to create an account.

## Authenticated User Pages
- **Dashboard**: The main hub for users, displaying an overview of missions and quick access to tools.
  - **Upcoming Launches**: List of scheduled launches and planning status.
  - **Mission Archive**: Historical data on past missions.
- **Mission Planner**: Interface for planning new missions, including setting objectives, choosing spacecraft, and scheduling.
  - **Create New Mission**: Form for inputting new mission details.
  - **Mission Details Page**: Detailed view of a specific mission, including planning tools results and status updates.
- **Craft Repository**: A collection of user-uploaded spacecraft designs.
  - **Upload New Craft**: Form for submitting new spacecraft designs.
  - **Craft Details Page**: Detailed view of a specific craft, including specifications and download options.
- **Planning Tools**: Access to various mission planning tools.
  - **DeltaV Calculator**
  - **Launch Window Planner**
  - **Interplanetary Trajectory Calculator**
  - **Resonant Orbit Calculator**
  - **Communication Network Planner**
  - **Aerobrake Calculator**
  - **3D Visualizer**: Integrated within applicable tools for enhanced visualization.
- **Settings**: User account settings, including profile management and preferences.

## Administrative Pages (Optional)
- **Admin Dashboard**: Overview of application metrics, and user management.


# Mockups

![Mockup image](https://github.com/HMouaziz/KSP-MissionPlanner/blob/main/Screenshot-2024-03-15-01.png?raw=true)
![Mockup image](https://github.com/HMouaziz/KSP-MissionPlanner/blob/main/Screenshot-2024-03-15-02.png?raw=true)
![Mockup image](https://github.com/HMouaziz/KSP-MissionPlanner/blob/main/Screenshot-2024-03-15-03.png?raw=true)
![Mockup image](https://github.com/HMouaziz/KSP-MissionPlanner/blob/main/Screenshot-2024-03-15-04.png?raw=true)
![Mockup image](https://github.com/HMouaziz/KSP-MissionPlanner/blob/main/Screenshot-2024-03-15-05.png?raw=true)

# Database Schema

## users
- `id` (PK): INT, auto-increment
- `username`: VARCHAR
- `email`: VARCHAR, unique
- `password_hash`: VARCHAR
- `created_at`: DATETIME
- `last_login_at`: DATETIME, nullable

## missions
- `id` (PK): INT, auto-increment
- `user_id` (FK): INT, references `users.id`
- `name`: VARCHAR
- `description`: TEXT, nullable
- `budget`: DECIMAL(10,2), nullable
- `launch_date`: DATE, nullable
- `start_date`: DATETIME
- `created_at`: DATETIME
- `updated_at`: DATETIME

## crafts
- `id` (PK): INT, auto-increment
- `user_id` (FK): INT, references `users.id`
- `name`: VARCHAR
- `type`: VARCHAR
- `specifications`: JSON, nullable
- `created_at`: DATETIME
- `updated_at`: DATETIME
- `cost`: DECIMAL(10,2), nullable
- `research_and_development_cost`: DECIMAL(10,2), nullable

## craft_specs
- `id` (PK): INT, auto-increment
- `craft_id` (FK): INT, references `crafts.id`
- `height`: DECIMAL(10,2), nullable
- `width`: DECIMAL(10,2), nullable
- `length`: DECIMAL(10,2), nullable
- `delta_v_at_max_payload`: DECIMAL(10,2), nullable
- `delta_v_at_min_payload`: DECIMAL(10,2), nullable
- Additional specifications as needed...

## mission_crafts
- `id` (PK): INT, auto-increment
- `mission_id` (FK): INT, references `missions.id`
- `craft_id` (FK): INT, references `crafts.id`
- `role`: VARCHAR

## launchpads
- `id` (PK): INT, auto-increment
- `name`: VARCHAR
- `description`: TEXT, nullable
- `current_use`: VARCHAR, nullable
- `use_history`: JSON, nullable
- `user_id` (FK): INT, references `users.id`

## mission_objectives
- `id` (PK): INT, auto-increment
- `mission_id` (FK): INT, references `missions.id`
- `title`: VARCHAR
- `description`: TEXT, nullable
- `type`: VARCHAR
- `data`: JSON, nullable

## mission_stages
- `id` (PK): INT, auto-increment
- `mission_id` (FK): INT, references `missions.id`
- `title`: VARCHAR
- `description`: TEXT, nullable
- `type`: VARCHAR
- `data`: JSON, nullable

## tool_save_data
- `id` (PK): INT, auto-increment
- `mission_id` (FK): INT, references `missions.id`
- `tool_type`: VARCHAR
- `data`: JSON
- `created_at`: DATETIME

## user_settings
- `id` (PK): INT, auto-increment
- `user_id` (FK): INT, references `users.id`
- `name`: VARCHAR
- `value`: VARCHAR


# Endpoints

## User Management Endpoints

### Register
- `POST /api/users/register`: Create a new user account.

### Login
- `POST /api/users/login`: Authenticate and log in a user.

### Logout
- `GET /api/users/logout`: Log out the current user.

### User Profile
- `GET /api/users/profile`: Retrieve the profile details of the current user.
- `PUT /api/users/profile`: Update the profile information of the current user.

## Missions Endpoints

### Mission CRUD
- `POST /api/missions`: Add a new mission.
- `GET /api/missions`: List all missions for the current user.
- `GET /api/missions/:missionId`: Retrieve details for a specific mission.
- `PUT /api/missions/:missionId`: Update details for a specific mission.
- `DELETE /api/missions/:missionId`: Delete a specific mission.

## Crafts Endpoints

### Craft CRUD
- `POST /api/crafts`: Add a new craft.
- `GET /api/crafts`: Retrieve all crafts.
- `GET /api/crafts/:craftId`: Retrieve details for a specific craft.
- `PUT /api/crafts/:craftId`: Update a specific craft.
- `DELETE /api/crafts/:craftId`: Delete a specific craft.

## Mission Crafts Endpoints

### Mission Craft Association
- `POST /api/mission_crafts`: Assign a craft to a mission.
- `GET /api/mission_crafts/:missionId`: List crafts assigned to a mission.
- `DELETE /api/mission_crafts/:missionCraftId`: Remove a craft from a mission.

## Launchpads Endpoints

### Launchpad CRUD
- `POST /api/launchpads`: Create a new launchpad.
- `GET /api/launchpads`: Retrieve all launchpads.
- `GET /api/launchpads/:launchpadId`: Get details of a specific launchpad.
- `PUT /api/launchpads/:launchpadId`: Update a specific launchpad.
- `DELETE /api/launchpads/:launchpadId`: Delete a specific launchpad.

## Calculation Tools Endpoints

### Tool Calculations
- `POST /api/tools/:toolType/calculate`: Perform calculations based on the specified tool type and input parameters.

Example POST request body for DeltaV calculations:
```json
{
  "toolType": "delta-v",
  "inputParameters": {
    "craftMass": 10000,
    "engineThrust": 200,
    "specificImpulse": 300
  }
}
```

Example response:
```json
{
  "deltaV": 9500,
  "burnTime": 120,
  "fuelRequired": 1500
}
```
### User Settings Endpoints
#### Settings CRUD

    GET /api/user_settings: Retrieve settings for the current user.
    PUT /api/user_settings: Update settings for the current user.


# Authentication

## Registration

- **Endpoint**: `POST /api/users/register`
- **Purpose**: Allows new users to create an account by submitting a unique username, an email address, and a password.
- **Data Submitted**:
  - `username`: A unique identifier for the user across the system.
  - `email`: The user's email address, utilized for account verification and important communications.
  - `password`: User's password, which undergoes client-side hashing with a slow hashing function before transmission and is further secured with a server-side fast hashing function upon receipt.

## Login

- **Endpoint**: `POST /api/users/login`
- **Purpose**: Verifies user credentials against the stored hash and initiates an authenticated session if successful.
- **Data Submitted**:
  - `username`: The user's account identifier.
  - `password`: The user's password, encrypted client-side with a nonce and transmitted securely. Server-side decryption and re-hashing occur before verification against the stored hash.

## Session Management

- Upon successful authentication, a session is established for the user. This session is managed through secure, HTTP-only cookies, ensuring the integrity and confidentiality of the user's authenticated session as they navigate the application.
- Sessions are designed to be resilient against common web vulnerabilities such as Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF).

## Security Measures

- **Client-Side Password Handling**: Passwords are hashed client-side using a slow hashing algorithm like bcrypt, combined with a unique salt for each user, before being encrypted for transmission.
- **Secure Transmission**: Password hashes are encrypted with a nonce (unique for each transmission) before being sent over HTTPS, adding an extra layer of security against potential HTTPS vulnerabilities.
- **Server-Side Processing**: Upon receipt, the encrypted hash is decrypted using the nonce. It is then re-hashed with a fast hashing algorithm for storage and verification, ensuring that the server never handles plaintext passwords.
- **Session Security**: Utilizes secure, HTTP-only cookies for session management, protecting against XSS attacks. Additional measures are taken to safeguard against CSRF attacks.

## Logout

- **Endpoint**: `GET /api/users/logout`
- **Purpose**: Securely terminates the user's session and logs them out of the application, ensuring that session cookies are invalidated.

## Implementation Notes

- The exact mechanisms for nonce generation, transmission, and encryption/decryption will adhere to current best practices in cryptographic security to ensure the robustness of the system against attacks.
- Further security features and best practices will be incorporated as the system is developed, with continuous updates to this documentation to reflect any changes or enhancements in our authentication strategy.


# Roadmap

The following roadmap outlines the development process of the Mission Planning Application, split into distinct phases to meet the MVP submission deadline in 2 weeks.

## Phase 1: Setup (Days 1-2)

### Objectives:
- Set up the development environment.
- Initialize the project repository.
- Configure backend and frontend scaffolding.
- Establish a basic project structure and coding standards.

### Key Tasks:
- Initialize the project with `Vite` for the frontend and set up `Express` for the backend.
- Create the database schema and configure `MySQL` with `Knex`.
- Set up version control with `Git` and host the repository on `GitHub`.
- Configure `ESLint` and `Prettier` for code linting and formatting.

## Phase 2: Main Functionality - Mission Planner (Days 3-7)

### Objectives:
- Implement core functionalities for mission planning.
- Develop the initial user interface with emphasis on usability and aesthetics.

### Key Tasks:
- **Backend Development**:
  - Build CRUD endpoints for missions and crafts.
  - Implement database interactions for these features using Knex.

- **Frontend Development**:
  - Create React components for mission and craft management interfaces.
  - Connect frontend components with backend services for dynamic data retrieval and manipulation.

- **UI Styling**:
  - Integrate Tailwind CSS for utility-first styling.
  - Experiment with Material UI or ShadcnUI components to enhance user interface design.
  - Ensure responsiveness and cross-device compatibility.

- **UX Design**:
  - Experiment with layout and navigation design to improve user experience.
  - Establish a consistent look and feel that aligns with the application's objectives.

- **Feedback and Iteration**:
  - Begin collecting user feedback on UI/UX design.
  - Make initial adjustments based on feedback to refine the interface and user experience.

### Deliverables:
- Functional mission and craft management features, accessible through a user-friendly interface.
- A preliminary UI styled with Tailwind CSS and enhanced with a chosen component library.
- Initial user feedback loop established for continuous improvement.


## Phase 3: Authentication (Start of Week 2, Days 8-10)

### Objectives:
- Implement user authentication system.
- Secure backend endpoints with proper authentication checks.
- Provide frontend UI for user registration and login.

### Key Tasks:
- After the authentication lecture, choose the authentication method and implement it.
- Secure all relevant API endpoints using middleware for authentication.
- Create frontend forms and components for user registration and login.
- Integrate frontend authentication with backend services.

## Phase 4+: Additional Features (Week 2, Days 11-14)

### Objectives:
- Add extended mission planning tools (e.g., DeltaV Calculator, Launch Window Planner).
- Begin developing the 3D Visualizer component for tool outputs.
- Implement user settings management.

### Key Tasks:
- Develop backend logic for calculation tools and associated endpoints.
- Start frontend development for 3D visualization using `react-three-fiber`.
- Create endpoints and UI for managing user settings.

### Preparation for Demo Day:
- Ensure that all core features are functioning correctly.
- Prepare a demonstration script to showcase the application's capabilities.

## Post-MVP Development (Beyond Week 2)

### Objectives:
- Continue to refine existing features and UI.
- Begin incremental development of additional features planned for Phase 4.
- Gather user feedback and iterate on the product.

### Key Tasks:
- Incorporate feedback from the demo day into further development.
- Plan and start working on additional features such as the Communication Network Planner and Aerobrake Calculator.
- Establish a new, more sustainable development pace for post-MVP work.
