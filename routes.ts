import { Router } from "https://deno.land/x/oak/mod.ts";
import { calculateFizzBuzz } from "./controller.ts";

const router = new Router();

router.get("/api/v1/fizzbuzz/:id", calculateFizzBuzz);

export default router;
