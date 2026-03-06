import { Application } from "jsr:@oak/oak";
import router from "./routes.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server runningv on http://localhost:8079/hello/matteo");

await app.listen({ port: 8079 });
