import { ErrorCodes } from '../contracts/ErrorCode.interface';
import { GenericException } from './Generic.exception';

class NotFoundEMailException extends GenericException {
  constructor(public param: string) {
    super(ErrorCodes.NOT_FOUND_EMAIL_ERROR);
  }
}

export { NotFoundEMailException };
