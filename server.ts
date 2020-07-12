import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { bold, green } from "https://deno.land/std@0.53.0/fmt/colors.ts";
import router from "./routes.ts";
const port = 8000;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ secure, hostname, port }) => {
  const protocol = secure ? "https://" : "http://";
  const url = `${protocol}${hostname ?? "localhost"}:${port}`;
  console.log(`${bold("server is listening on :")} ${green(url)}`);
});

await app.listen({ port });
