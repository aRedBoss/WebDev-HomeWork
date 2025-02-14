const express = require('express');
const connectDB = require('./db')

connectDB()

const app = express();
app.use(express.json());

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});