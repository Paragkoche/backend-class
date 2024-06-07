import request from "supertest";
import app from "../src/app";


describe("todo api test", () => {
    test("get todo", async () => {
        const data = await request(app).get("/api/v1/");
        expect(data.status).toBe(200);
        expect(data.body).toBeInstanceOf(Array);
    });
    test("create todo", async () => {
        const data = await request(app).post("/api/v1/create").send({
            "message": "h1",
            "time": new Date(),
            "completeOn": new Date()
        });
        expect(data.body).toBeInstanceOf(Object);
        expect(data.status).toBe(200)
    })
    test("create todo not valid", async () => {
        const data = await request(app).post("/api/v1/create").send({
            "message": "h1",
            "time": 123,
            "completeOn": 155
        });
        console.log(data.body);

        expect(data.body).toBeInstanceOf(Object);
        expect(data.status).toBe(404)
    })

})