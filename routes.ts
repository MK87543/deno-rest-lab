import { Router } from "jsr:@oak/oak";
import { hello } from "./service.ts";

const router = new Router();

router.get("/hello/:name", (ctx) => {
  const name = ctx.params.name;

  ctx.response.body = {
    message: hello(name!),
  };
});

router.get("/time", (ctx) => {
  ctx.response.body = {
    time: new Date(),
  };
});

router.post("/echo", async (ctx) => {
  const body = await ctx.request.body.json();
  ctx.response.body = body;
});

export default router;
