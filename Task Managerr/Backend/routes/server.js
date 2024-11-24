const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');
const taskRoutes = require('./routes/tasks');

dotenv.config();
db.connectDB();

const app = express();

app.use(express.json());
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
