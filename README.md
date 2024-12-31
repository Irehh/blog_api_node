# blog_api_node
Blog API built with Node.js, Express, and MongoDB

## Features

- **Authentication:** User signup and login functionality.
- **CRUD Operations:** Create, read, update, and delete blogs.
- **User Management:** Fetch all users, fetch blogs by user ID.
- **Database Integration:** MongoDB Atlas for database management.
- **RESTful API:** Well-structured RESTful endpoints.

## Getting Started

Follow these steps to get the application up and running on your local machine.

### Prerequisites

- Node.js installed on your machine. You can download it from nodejs.org.
- MongoDB Atlas account for the database. You can sign up at mongodb.com.

### Installation

1. **Clone the repository:**

   git clone https://github.com/your-username/blog_api_node.git
   cd blog_api_node

2. **Install dependencies:**

   npm install

3. **Set up MongoDB Atlas:**

   - Create a cluster on MongoDB Atlas.
   - Replace the MongoDB connection string in app.js with your own connection string.

4. **Run the application:**

   npm start

   The server will start and listen on port 5000. You should see the message:

   Connected to first cluster and listening on port 5000

### API Endpoints

- **User Routes:**
  - GET /api/users/ - Fetch all users.
  - POST /api/users/signup - Sign up a new user.
  - POST /api/users/login - Log in an existing user.

- **Blog Routes:**
  - GET /api/blogs/ - Fetch all blogs.
  - POST /api/blogs/add - Add a new blog.
  - PUT /api/blogs/update/:id - Update an existing blog by ID.
  - GET /api/blogs/:id - Fetch a blog by ID.
  - DELETE /api/blogs/delete/:id - Delete a blog by ID.
  - GET /api/blogs/users/:id - Fetch blogs by user ID.

### Example Usage

To use the API, you can use tools like Postman or curl.

For example, to fetch all users:

 http://localhost:5000/api/users/