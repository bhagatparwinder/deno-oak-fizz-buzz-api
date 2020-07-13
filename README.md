# deno-oak-fizz-buzz-api

### Implementation of Fizz Buzz as an endpoint using Deno and Oak

Every now and then I take a break from writing about JavaScript. This is one of those breaks. Deno is the new hot runtime for JavaScript and Typescript and I wanted to get my hands dirty. We will be building an endpoint that takes in a number as route parameter and returns status 200 with message of either "Fizz", "Buzz" or "FizzBuzz". If you do not know the Fizz Buzz challenge, here is the problem statement.

```text
Create an endpoint that takes a number.
If the number is a multiple of 3, return "Fizz".
If the number is a multiple of 5, return "Buzz".
For number which is a multiple of both 3 and 5, return "FizzBuzz".

Assume that the input will always be a number.
```

### Running the application

```bash
deno run --allow-net server.ts
```

### Testing endpoints

Going to `127.0.0.1:8000/` should give you a 200 status with body:

```json
{
    "message": "Hello World!"
}
```

Going to `127.0.0.1:8000/fizzbuzz/9` should give you a 200 status with body:

```json
{
    "message": "Fizz"
}
```

Going to `127.0.0.1:8000/fizzbuzz/50` should give you a 200 status with body:

```json
{
    "message": "Buzz"
}
```

Going to `127.0.0.1:8000/fizzbuzz/90` should give you a 200 status with body:

```json
{
    "message": "FizzBuzz"
}
```
