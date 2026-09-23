JoveJobs
JoveJobs is a full-stack job platform created to connect candidates and companies through a structured digital environment for job opportunities and profile management.

The application is designed around different user roles, providing tailored experiences for public visitors, candidates, companies, and administrators. It brings together the main elements of a recruitment platform: user authentication, role-based access, profile management, job-offer functionality, form validation, and database-driven data management.

Purpose
The purpose of JoveJobs is to simulate a real-world job-search platform where candidates can build and manage their professional presence, while companies can access features related to recruitment and job opportunities.

This project was developed as a practical full-stack exercise focused on applying key web development concepts in a single application. It combines a modern frontend interface with a REST API and a relational database, while keeping responsibilities separated across reusable components, feature modules, and protected routes.

Main Features
Public pages for visitors and authentication flows.

Registration and login for candidates and companies.

JWT-based authentication.

Protected routes for authenticated users.

Role-based areas and layouts for candidates, companies, and administrators.

Candidate profile management.

Company-related functionality.

Job-offer module.

Client-side and server-side data validation.

Secure password hashing.

File upload support.

Email-related services.

Technologies Used
Frontend
React for building the user interface.

Vite for the frontend development and build environment.

React Router for navigation and route protection.

Axios for communication with the backend API.

Bootstrap and React Bootstrap for interface components and responsive styling.

Zod for client-side form validation.

CSS for custom styles, visual variables, responsive layouts, and role-specific themes.

ESLint for code-quality checks.

Backend
Node.js and Express for the REST API.

MySQL with mysql2 for database connectivity.

JSON Web Tokens (JWT) for authentication and access control.

bcrypt for secure password hashing.

Zod for backend input validation.

Multer for file-upload handling.

Nodemailer for email services.

dotenv for environment-variable management.

CORS, cookie-parser, and Morgan for API configuration, cookies, and request logging.

Project Structure
The project is divided into a frontend client and a backend server. This separation makes it easier to maintain the user interface, API logic, data access, and feature-specific code independently.

text
.
├── client/                        # React frontend
│   ├── public/                    # Public static assets
│   ├── src/
│   │   ├── assets/                # Icons and visual resources
│   │   ├── components/            # Reusable UI components
│   │   ├── context/               # Authentication context and provider
│   │   ├── helpers/               # Axios and form-related utilities
│   │   ├── layouts/               # Public and role-based layouts
│   │   ├── pages/                 # Pages grouped by application area
│   │   ├── routes/                # Public, private, and app routes
│   │   └── schemas/               # Zod validation schemas
│   │
├── server/                        # Express backend
│   ├── config/                    # Database configuration
│   ├── middlewares/                # Authentication and upload middleware
│   ├── modules/                   # Feature-based API modules
│   │   ├── admin/
│   │   ├── auth/
│   │   ├── candidate/
│   │   ├── company/
│   │   └── offer/
│   ├── public/                    # Static and uploaded resources
│   └── services/                  # Email-related services
│
└── joveJobs.sql                   # Database schema and/or seed data
Architecture
Frontend
The frontend uses React and follows a component-based architecture. Reusable interface elements are stored in components/, while each area of the application has its own pages and layouts.

Authentication state is managed through AuthContext, allowing the application to share the current user state across components. Routing is separated into public and private routes so that restricted pages can only be accessed by authenticated users with the appropriate role.

Validation schemas are organized separately to keep form rules reusable and easy to maintain. Axios helper utilities centralize API communication between the frontend and the backend.

Backend
The backend is built with Express and organized by feature. Each major domain of the platform has its own module, which helps keep routes and business logic separated and scalable.

The authentication module manages registration, login, user access, and related data-access logic. Candidate, company, job-offer, and administrator functionality is grouped into dedicated modules. Middleware is used to verify authentication tokens and handle uploaded files before requests reach the application logic.

The backend connects to a MySQL database and exposes the API endpoints consumed by the React client.

Learning Focus
JoveJobs was developed to practice and demonstrate important full-stack development skills:

Designing a frontend and backend that work together through a REST API.

Structuring a React project with components, layouts, contexts, routes, and validation schemas.

Building an Express server organized into feature-based modules.

Connecting an application to a relational MySQL database.

Implementing authentication with JWT and password hashing with bcrypt.

Managing protected routes and role-based user experiences.

Validating data on both the client and server sides.

Handling file uploads and email-related functionality.

Future Improvements
Possible future enhancements include advanced offer filtering, pagination, more complete dashboards for each role, password recovery and email verification, automated tests, improved error handling, and deployment or CI/CD configuration.

Author
Developed as a full-stack web development project.
