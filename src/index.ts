import express from "express";
import todoApi from "./routers/todo.routes"
const app = express();

app.use(express.json({
    limit: "1mb"
}));


app.use("/api/v1", todoApi)


// CRUD -> TODOs

//DB
// time, message, cOn, id -> {}






//API
// /create <- {data} {data}
// /update <- {id,data} ,{update data}
// /delete <- {id}, string<ok | error>
// / <-[...{data}]  /:id <- {data} 


app.listen(8080, () => {
    console.log("server start at 8080");
})


















//MVC

