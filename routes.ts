import { Router } from "https://deno.land/x/oak/mod.ts";
import { helloWorld, calculateFizzBuzz } from "./controller.ts";

const router = new Router();

router
    .get("/", helloWorld)
    .get("/fizzbuzz/:id", calculateFizzBuzz);

export default router;
