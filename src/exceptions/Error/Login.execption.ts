import { ErrorCodes } from '../contracts/ErrorCode.interface';
import { GenericException } from './Generic.exception';

class LoginException extends GenericException {
  constructor() {
    super(ErrorCodes.LOGIN_ERROR);
  }
}

export { LoginException };
