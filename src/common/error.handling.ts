

class ErrorHandling extends Error {
  constructor(
    private readonly status: number,
    message: string,
    private readonly errors?: any
  ) {
    super(message);
    this.status = status;
    this.errors = errors;
  }
}
export default ErrorHandling;