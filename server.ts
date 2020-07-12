import { Application, Router } from "https://deno.land/x/oak/mod.ts";
const port = 8000;
const app = new Application();
const router = new Router();

router.get("/", ({ response }: { response: any }) => {
  response.body = {
    message: "Hello World!",
  };
});

app.use(router.routes());

console.log(`server is running on port ${port}`);

await app.listen({ port });
