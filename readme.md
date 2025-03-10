# MERN App Setup Guide

This guide will help you set up a new MERN (MongoDB, Express, React, Node.js) app from scratch. It includes all the necessary steps to get the backend and frontend running.

---

## **1. Backend Setup**

### **Prerequisites**
- **Install Node.js**: [Download Node.js](https://nodejs.org/en/)
- **Install MongoDB**: [Download MongoDB](https://www.mongodb.com/try/download/community)

### **Step-by-Step Setup:**

1. Open terminal and navigate to the backend directory.

2. Run the following command to create a `package.json` file:

```bash
npm init -y
```

3. Install **Express** and **Dotenv** by running the following command:

```bash
npm install express dotenv
```

4. Install **nodemon** as a dev dependency by running the following command:

```bash
npm i nodemon -D
```

5. Install **Postman** for testing.

6. **MVC** structure: create the following files:
   - `app.js`
   - `config/db.js`
   - `models/model.js`
   - `controllers/controller.js`
   - `routes/router.js`

7. Connect to MongoDB using mongoose (`config/db.js`). Example:

```javascript
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectDB;
```

8. Make a model Schema (`models/model.js`). Example:

```javascript
const mongoose = require('mongoose');

// Define a basic schema for an Item
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Name of the item
    },
    quantity: {
        type: Number,
        required: true, // Quantity of the item
    },
    price: {
        type: Number,
        required: true, // Price of the item
    }
});

// Create and export the model based on the schema
module.exports = mongoose.model('Item', itemSchema);
```

9. Continue with the **controllers** (GET, POST, DELETE, PATCH) logic by importing the model, then set up **routes** (GET, POST, DELETE, PATCH) by importing the controllers.

10. Test with **Postman** to make sure that the backend is functional.

---

## **2. Frontend Setup**

### **Step-by-Step Setup with Vite:**

1. **Create a new Vite React app:**

```bash
npm create vite@latest frontend
```

2. **Choose options:**
   - **Project name:** `frontend`
   - **Framework:** `React`
   - **Variant:** `JavaScript`

3. **Navigate into your frontend directory:**

```bash
cd frontend
```

4. **Install dependencies:**

```bash
npm install
```

5. **Run the development server:**

```bash
npm run dev
```

Now you have both the backend and frontend set up for your MERN app! 🚀

