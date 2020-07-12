import { Router } from "https://deno.land/x/oak/mod.ts";
// import { calculateFizzBuzz } from "./controller.ts";

const router = new Router();

router.get("/", ({ response }: { response: any }) => {
  response.body = {
    message: "Hello World!",
  };
});

// router.get("/api/v1/fizzbuzz/:id", calculateFizzBuzz);

export default router;
