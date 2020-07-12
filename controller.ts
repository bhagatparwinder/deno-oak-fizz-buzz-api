export const helloWorld = ({ response }: { response: any }) => {
  response.body = {
    message: "Hello World!",
  };
};

export const calculateFizzBuzz = async ({ params, response }: { params: { id: string }, response: any }) => {
    response.status = 200;
    response.body = {
        success: true,
        data: "fizz"
    }
}
