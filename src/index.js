import express from 'express';
import v1TaskRoutes from './v1/routes/taskRoutes.js';
import 'dotenv/config';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.append("Access-Control-Allow-Origin", "*");
    next();
})

app.use("/api/v1/tasks", v1TaskRoutes);

app.listen(process.env.PORT);
console.log(`Server running in port: ${process.env.PORT}`);