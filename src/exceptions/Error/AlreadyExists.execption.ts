import { ErrorCodes } from '../contracts/ErrorCode.interface';
import { GenericException } from './Generic.exception';

class AlreadyExistsException extends GenericException {
  constructor(public params: string[], service?: string) {
    super(ErrorCodes.ALREADY_EXISTS_ERROR, service);
  }
}

export { AlreadyExistsException };
