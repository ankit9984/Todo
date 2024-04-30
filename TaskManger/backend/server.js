import express from  'express';
import connectDB from './database/db.js';
import dotenv from 'dotenv'

import taskRouter from './routes/task.routes.js'
import errorHandler from './middleware/error.middleware.js';

const app = express();
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(errorHandler)
app.use('/api/tasks', taskRouter)

app.listen(PORT, async () => {
    console.log(`server is running on port ${PORT}`);
})