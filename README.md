# GitHub Clone Project

A GitHub clone application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project mimics GitHub's functionality, including repositories, user profiles, and authentication.

## Features

- **User Authentication:** Secure login and registration using GitHub OAuth.
- **Repository Management:** Create, view, and manage repositories.
- **User Profiles:** View and edit user profiles.
- **Real-time Updates:** Real-time notifications for repository changes and user activities.

## Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** GitHub OAuth
- **Real-time Communication:** Socket.IO (if applicable)

## Setup and Installation

### Prerequisites

- Node.js and npm installed
- MongoDB instance running (locally or remotely)

### Installation and Setup

1. **Clone the Repository:**

```
   git clone https://github.com/abhishekpaturkar/github-clone.git
```

2. **Navigate to the Project Directory:**

```
   cd github-clone
```

3. **Setup Backend:**

   Navigate to the backend directory:

```
   cd backend
```

Install backend dependencies:

```
   npm install
```

Create a `.env` file in the `root` directory with the following content:

```
GITHUB_API_KEY=""
MONGO_URL=""
PORT=3000
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
CLIENT_BASE_URL=""
```

Start the backend server:

```
   npm start
```

4. **Setup Frontend:**

   Navigate to the frontend directory:

   ```
   cd ../frontend
   ```

   Install frontend dependencies:

   ```
   npm install
   ```

   Start the frontend development server:

   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5173` to access the application.

## Usage

- **Authentication:** Log in with your GitHub account using OAuth.
- **Manage Repositories:** Create and manage your repositories.
- **View Profiles:** Navigate to user profiles to view and edit details.

## Contributing

Contributions are welcome! Please submit issues or pull requests on GitHub.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any questions or support, contact:

- Email: paturkarabhishek03@gmail.com
- GitHub: abhishekpaturkar
