import app from "./app"
import { conn } from "./db/conn";
app.listen(8080, async () => {
    await conn()
    console.log("server start at 8080");
});
