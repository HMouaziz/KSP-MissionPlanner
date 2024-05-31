# Mission Planner Frontend

Welcome to the Mission Planner Frontend repository! This project is part of the Mission Planner application, providing the user interface for planning and managing space missions.

## Prerequisites

- Docker
- Docker Compose

## Setup

1. **Clone the frontend and backend repositories:**
   ```sh
   git clone https://github.com/HMouaziz/MissionPlanner-Client.git MissionPlanner-Client
   git clone https://github.com/HMouaziz/MissionPlanner-Server.git MissionPlanner-Server
   ```

2. **Ensure the directory structure looks like this:**
   ```plaintext
   MissionPlanner/
   ├── MissionPlanner-Client/
   └── MissionPlanner-Server/
   ```

3. **Navigate to the backend directory:**
   ```sh
   cd MissionPlanner-Server
   ```

4. **Run Docker Compose:**
   ```sh
   docker-compose up --build
   ```

## Additional Notes

- Ensure that both frontend and backend repositories contain their respective Dockerfiles.
- The Docker Compose file is located in the backend repository and is responsible for orchestrating all services, including the frontend, backend, MySQL, and Redis.

By following these steps, you can set up and run the Mission Planner application using Docker and Docker Compose. If you encounter any issues or need further assistance, refer to the detailed documentation in the docs directory of the backend repository.

---

Developed by Halim Mouaziz @ project-hephaestus.com &copy; 2024
