# Hr-management
The HR Management Project is a comprehensive Node.js application designed to streamline human resource operations. Built with Express.js and MySQL, this backend service provides APIs to manage employees, job postings, and applications.

### Prerequisites

1. ```NodeJs```
2. ```NPM```
3. ```MySQL```

### Quick start

1. Clone the repository with `git clone https://github.com/codetodecodedark/Hr-management.git <your_project_folder_name>`
2. Change directory to your project folder `cd <your_project_folder_name>`
3. Install the dependencies with `npm install`
4. Create database in MySQL, use the hr_management.sql database file.
5. Update the your database name and credentials in the `.env` file.(remember that the .env file is sended seperately).
6. Run the application with `npm start` (MySQL service should be up and running).
7. Access `http://localhost:5000` and you're ready to go!

### Folder Structure
```
.
├── backend/
│   ├── config/                # database connection file
│   ├── controllers/           # Controllers
│   ├── middlewares/           # Middlewares
│   ├── models/                # MySQL database models
│   ├── node_modules/                # node_modules 
│   ├── routes/                # route definitions
├── .env                       # API keys, passwords, and other sensitive information
├── app.js                    # code related using the routes
├── package-lock.json          # internal dependencies
├── package.json               # NPM Dependencies and scripts
└── server.js                  # main entry file including the code of starting the server
```

## Packages used
"dependencies": {
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.20.3",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "jsonwebtoken": "^9.0.2",
    "morgan": "^1.10.0",
    "mysql2": "^3.12.0",
    "sequelize": "^6.37.5"
  }
