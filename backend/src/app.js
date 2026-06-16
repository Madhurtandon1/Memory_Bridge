import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";


import authRoutes from "./routes/auth.routes.js";
import collectionRoutes from "./routes/collection.routes.js";
import memoryRoutes from "./routes/memory.routes.js";
import uploadRoutes from "./routes/upload.routes.js";
import storyRoutes from "./routes/story.routes.js";
import chatRoutes from "./routes/chat.routes.js";
import lifeRouter from "./routes/life.routes.js";


import errorHandler from "./middlewares/error.middleware.js";
import {apiLimiter} from "./middlewares/rateLimit.middleware.js";

const app = express();

app.use(helmet());
app.use(compression());
app.use(morgan("dev"));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());




app.use("/api", apiLimiter);

app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/collections", collectionRoutes);

app.use("/api/v1/memories", memoryRoutes);

app.use(  "/api/v1/uploads",  uploadRoutes);

app.use("/api/v1/stories", storyRoutes);

app.use(  "/api/v1/chat",  chatRoutes);

app.use("/api/v1/life",lifeRouter);

app.use(errorHandler);

export default app;