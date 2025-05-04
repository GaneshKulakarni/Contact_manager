📇 Contact Manager API

A simple and secure **RESTful API** built with **Node.js**, **Express.js**, and **MongoDB**, allowing users to register, log in, and manage their personal contacts.

 🚀 Features

- ✅ User Registration & Login (JWT-based authentication)
- 🔐 Protected Routes (Only logged-in users can manage their own contacts)
- 📥 CRUD Operations for Contacts (Create, Read, Update, Delete)
- 🛡️ Passwords are securely hashed using bcrypt
- 🌐 MongoDB with Mongoose for database operations
- ⚙️ Environment variable management using dotenv

---
## 🏗️ Project Structure

```
contact-manager-api/
├── controllers/
│   ├── contactController.js
│   └── userController.js
├── middleware/
│   ├── errorHandler.js
│   └── ValidateTokenHandler.js
├── models/
│   ├── contactModels.js
│   └── userModels.js
├── routes/
│   ├── ContactRoutes.js
│   └── userRoutes.js
├── config/
│   └── dbConnection.js
├── .env
├── .gitignore
├── server.js
├── package.json
```




---

## 🛠️ Setup Instructions

1. Clone the repository:
 ```
   git clone https://github.com/your-username/contact-manager-api.git
   cd contact-manager-api
```
2. Install dependencies:
 ```
   npm install
```
3.  Create a .env file in the root folder and add the following:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ACCESS_TOKEN_SECRET=your_jwt_secret
```
4. Start the server
```
   npm start
```
🚧 Current Status: Actively Developing

This project is currently under active development. Core features like user registration, login (JWT), and contact management APIs are implemented.

Planned Improvements:
- Improve validation and error handling
- Develop the frontend using React.js
- Implement pagination and search in contact list
- Add unit & integration tests

🤝 Contributions are Welcome!

If you'd like to contribute:
1. Fork the repo
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to your branch (`git push origin feature-name`)
5. Open a Pull Request

Please make sure your code follows basic formatting and standards!

   




