import type { Request, Response } from "express";
import pgtypes from "pg-types"
import { data } from "../modules/todos";



export const GetTodo = async (req: Request, res: Response) => {

    return res.json(await data.getData());
}
export const CreateTodo = async (req: Request, res: Response) => {
    const body = req.body;

    if (!body.completeOn || !body.message) {
        return res.status(404).send("data not valid")
    }
    if ((typeof body.completeOn !== "string")) {
        return res.status(404).send("data not valid ->")
    }

    if ((typeof body.message !== "string")) {
        return res.status(404).send("data not valid")
    }

    body.completeOn = new Date(body.completeOn);
    let _data = { ...body, }


    await data.addData(_data)
    return res.json(_data)
}
export const UpdateTodo = async (req: Request, res: Response) => {
    console.log("hi");

    const id = parseInt(req.params.id);
    const body = req.body;
    if (!body.completeOn || !body.message) {
        return res.status(404).send("data not valid")
    }
    if ((typeof body.completeOn !== "string")) {
        return res.status(404).send("data not valid ->")
    }

    if ((typeof body.message !== "string")) {
        return res.status(404).send("data not valid")
    }
    const updateData = await data.updateData(id, body)
    return res.json(updateData)
}

export const DeleteTodo = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await data.deleteData(id)
    return res.send("Data delete");
}

export const getDataById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    return res.json(await data.getDataById(id) || "not valid")
}