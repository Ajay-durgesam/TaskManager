import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { errorHandler, routeNotFound } from "./middleware/errorMiddleware.js";
import routes from "./routes/index.js";
import dbConnection from "./utils/connectDB.js";

dotenv.config();

dbConnection();

const port = process.env.PORT || 4000;

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001", 'https://taskmanagerrrrrr.netlify.app','https://task-managerrrrr.vercel.app',"https://taskmanagerrr.onrender.com"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
    optionsSuccessStatus: 200
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(morgan("dev"));
app.use("/api", routes);

app.use(routeNotFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on ${port}`));
