# Synapse Backend

Backend for the **Synapse Website**, built with Node.js and Express.  
This backend provides RESTful APIs, handles authentication, manages data, and ensures scalability.

---

## 🚀 Features
- User authentication & authorization (JWT-based)
- Modular route handling with `express.Router()`
- MongoDB integration with Mongoose
- Middleware for validation & error handling
- Environment-based configuration (`.env`)
- Clean architecture for scalability

---

## 🛠 Tech Stack
- **Node.js** + **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** for authentication
- **dotenv** for environment variables
- **GitHub** for version control

---

## 🏗 Folder Structure

```bash
backend/
│
├── 📂 routes/             # All route definitions
│   └── 📂 adminRoutes
|       └── 📄 index.js
│   └── 📂 assessmentRoutes
|       └── 📄 index.js
│   └── 📂 authRoutes
|       └── 📄 index.js
│   └── 📂 userRoutes
|       └── 📄 index.js
│
├── 📂 controllers/        # Request handlers
│   ├── 📄 adminController.js
│   ├── 📄 assessmentController.js
│   ├── 📄 authController.js
│   └── 📄 userController.js
│
├── 📂 models/             # Database schemas
│   └── 📄 userSchema.js
│
├── 📂 middlewares/        # Custom middlewares
│   └── 📂 adminMiddleware
|       └── 📄 index.js
│   └── 📂 userMiddleware
|       └── 📄 index.js
│
├── 📂 utils/              # Helper functions
│
│
├── 📂 config/             # DB connections & environment configs
│   └── 📄 db.js
│
|
└── 📄 server.js           # Entry point

```

## 📑 API Documentation

### 👤 Users
- **GET /users** → Get all users  
- **POST /users** → Create a new user  

Example request body:
```json
{
  "name": "Amisha",
  "email": "amisha@example.com"
}
```
### 🔐 Auth

- **POST /auth/login** → Authenticate an existing user and return a JWT token.  
- **POST /auth/register** → Register a new user and store credentials securely.  

---

## 🚀 Future Improvements

- ✅ Add automated testing with **Jest** for better code reliability  
- ⚡ Integrate **Redis** for caching and performance optimization  
- 🛡️ Implement **rate limiting & security headers** to prevent abuse  
- 📖 Generate **Swagger/OpenAPI documentation** for clear API references  

---

## 🙏 Acknowledgements

- [📘 Express.js Docs](https://expressjs.com/)  
- [🍃 Mongoose Docs](https://mongoosejs.com/)  
- Community tutorials, articles, and open-source contributors 🙌  
