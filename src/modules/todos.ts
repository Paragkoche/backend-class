import { conn } from "../db/conn";
import { dataType } from "../types/datatype";

class Data {
    data: dataType[] = [];
    async addData(UserData: dataType) {
        await conn.query(`INSERT INTO "Todos"("message","completeON") VALUES($1,$2)`, [UserData.message, UserData.completeOn]);
        await conn.query("COMMIT")
        // this.data.push(UserData)
    }
    async updateData(id: number, UpdateData: dataType) {
        await conn.query(`UPDATE "Todos" SET message=$1, "completeON"=$2 WHERE "Id"=$3`, [UpdateData.message, UpdateData.completeOn, id])
        await conn.query("COMMIT")
        return (await conn.query(`SELECT * FROM public."Todos" WHERE "Id"=$1`, [id])).rows[0];
    }
    async deleteData(id: number) {
        await conn.query(`DELETE FROM "Todos" WHERE "Id"=$1`, [id])
        await conn.query("COMMIT")
        return "ok"

    }
    async getData() {
        let data = await conn.query(`SELECT * FROM public."Todos"`);


        return data.rows
    }
    async getDataById(id: number) {
        let data = await conn.query(`SELECT * FROM public."Todos" WHERE "Id"=$1`, [id]);


        return data.rows[0]

    }
}

export const data = new Data()