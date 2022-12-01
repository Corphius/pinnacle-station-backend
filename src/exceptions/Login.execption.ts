import { ErrorCodes } from './contracts/ErrorCode.interface';
import { GenericException } from './Generic.exception';

class LoginException extends GenericException {
  statusCode = ErrorCodes.LOGIN_ERROR.code;
  constructor(message?: string) {
    super(ErrorCodes.LOGIN_ERROR);

    Object.setPrototypeOf(this, LoginException.prototype);
  }

  getErrorMessage() {
    return 'Something went wrong: ' + this.message;
  }
}

const err = new LoginException('Failed to fetch');

// �️ "Failed to fetch"
console.log(err.message);

console.log(err.statusCode); // �️ 400

// �️ "Something went wrong: Failed to fetch"
console.log(err.getErrorMessage());

// ✅ Use type guard to be able to access properties/methods
if (err instanceof LoginException) {
  console.log(err.statusCode); // �️ 400

  // �️ "Something went wrong: Failed to fetch"
  console.log(err.getErrorMessage());
}

export { LoginException };
