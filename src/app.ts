import express from "express";
import todoApi from "./routers/todo.routes"
const app = express();
app.use(express.json({
    limit: "1mb"
}));
app.use("/api/v1", todoApi);

export default app;