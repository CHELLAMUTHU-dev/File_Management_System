# 📦 FILE MANAGEMENT

A MERN stack file management app that allows users to upload, view, and manage files securely.

---

## 🚀 Features

- User Authentication (Register/Login)
- Secure File Uploads
- MongoDB Integration for Data Storage
- File Delete options
- Responsive UI (React + SCSS )

---

## 🛠️ Tech Stack

- **Frontend:** React, SCSS, Axios, React Router  
- **Backend:** Node.js, Express.js, MongoDB, JWT, Multer, Mongoose
- **Database:** MongoDB Atlas
- **Version Control:** GIt & GitHub
- **Deployment:**  Render / Netlify / MongoDB Atlas

---

## ⚙️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/CHELLAMUTHU-dev/File_Management_System.git

```
### 2. Navigate to Root Directory
```
    cd File_Management_System

```
### 3. Install Dependencies
```
    1. For Frontend:
        cd client
        npm install (or) npm i

    1. For Backend:
        cd server
        npm install (or) npm i

```
### 4. Add Environment Variable (.env)
```
   - PORT=5000
   - MONGO_URI=your_mongodb_connection_string
   - JWT_SECRET=your_secret_key

```

### 5. Start the Application
``` 
    Frontend:
        npm run dev
    
    Backend: 
        npm Start

```

## 🧪 API Endpoints

**Method - Endpoint -Description**

- POST	-   /api/auth/register     - Register new user
- POST-	    /api/auth/login        - User login
- POST-	    /api/files/upload	   - Upload file
- GET	 -  /api/files	           - Get all uploaded files
- DELETE -	/api/files/:id         - Delete a file

## 📦 Project Preview:

client/src/assets/screenShots


