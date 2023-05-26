class ErrorHandler extends Error {
  constructor(message, stateCode) {
    super(message);
    this.stateCode = stateCode;

    Error.captureStackTrace(this, this.contructor);
  }
}

export default ErrorHandler;
