export const helloWorld = ({ response }: { response: any }) => {
  response.body = {
    message: "Hello World!",
  };
};

export const calculateFizzBuzz = ({ params, response }: { params: { id: string }, response: any }) => {
    const message = "";
    const input = params.id;

    response.body = {
        message
    }
}
