//partially initialized
enum direction {
  North = 1,
  East,
  South,
  West,
}

console.log(direction.West);

//fully initialized
enum statusCode {
  Error = 404,
  Completed = 200,
  Bad_Request = 400,
}

console.log(statusCode.Completed);
