import type { Request, Response } from "express";
import { data } from "../modules/todos";
export const GetTodo = (req: Request, res: Response) => {
    return res.json(data.getData());
}
export const CreateTodo = (req: Request, res: Response) => {
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
    let _data = { id: data.data.length + 1, ...body, }


    data.addData(_data)
    return res.json(_data)
}
export const UpdateTodo = (req: Request, res: Response) => {
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
    const updateData = data.updateData(id, body)
    return res.json(updateData)
}

export const DeleteTodo = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    data.deleteData(id)
    return res.send("Data delete");
}

export const getDataById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    return res.json(data.getDataById(id) || "not valid")
}