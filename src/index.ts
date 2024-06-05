import express from "express";
import type { dataType } from "./types/datatype"
const app = express();

app.use(express.json({
    limit: "1mb"
}))


// CRUD -> TODOs

//DB
// time, message, cOn, id -> {}




var data: dataType[] = [];




//API
// /create <- {data} {data}
// /update <- {id,data} ,{update data}
// /delete <- {id}, string<ok | error>
// / <-[...{data}]  /:id <- {data} 

app.get("/", (req, res) => {
    return res.json(data);
})



app.post("/create", (req, res) => {
    const body = req.body;
    if (!body.completeOn || !body.message || !body.time) {
        return res.status(404).send("data not valid")
    }
    if ((typeof body.completeOn !== "string")) {
        return res.status(404).send("data not valid ->")
    }
    if (typeof body.time !== "string") {
        return res.status(404).send("data not valid")
    }
    if ((typeof body.message !== "string")) {
        return res.status(404).send("data not valid")
    }
    body.time = new Date(body.time);
    body.completeOn = new Date(body.completeOn);
    let _data = { id: data.length + 1, ...body, }


    data.push(_data)
    return res.json(_data)
})

app.put("/update/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const body = req.body;
    if (!body.completeOn || !body.message || !body.time) {
        return res.status(404).send("data not valid")
    }
    if ((typeof body.completeOn !== "string")) {
        return res.status(404).send("data not valid ->")
    }
    if (typeof body.time !== "string") {
        return res.status(404).send("data not valid")
    }
    if ((typeof body.message !== "string")) {
        return res.status(404).send("data not valid")
    }
    let find_data = data.filter((v) => v.id == id);
    let index = data.indexOf(find_data[0]);
    data[index] = { id: find_data[0].id, ...body };
    return res.json(data.filter((v) => v.id == id)[0])
});
app.delete("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);
    let find_data = data.filter((v) => v.id == id);
    if (find_data.length == 0) {
        return res.status(404).send("data not valid")
    }
    let index = data.indexOf(find_data[0]);
    delete data[index]
    data = data.filter((v) => v != null)
    return res.send("Data delete");


})

app.get("/:id", (req, res) => {

    const id = parseInt(req.params.id);
    return res.json(data.filter((v) => v.id == id)[0] || "not valid")
});


// /1 /2 /3 /4 /1233


app.listen(8080, () => {
    console.log("server start at 8080");
})








