export const helloWorld = ({ response }: { response: any }) => {
  response.body = {
    message: "Hello World!",
  };
};

export const calculateFizzBuzz = ({ params, response }: { params: { id: string }, response: any }) => {
    let message = "";
    const input = parseInt(params.id);

    if(input % 15 === 0) {
        message = "FizzBuzz";
    } else if(input % 3 === 0) {
        message = "Fizz";
    } else if(input % 5 === 0) {
        message = "Buzz";
    } else {
        message = input.toString();
    }

    response.body = {
        message
    }
}
