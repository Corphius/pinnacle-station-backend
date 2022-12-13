import { ErrorCodes } from '../contracts/ErrorCode.interface';
import { GenericException } from './Generic.exception';

class NotFoundException extends GenericException {
  constructor(public param: string, data?: any, service?: string) {
    super(ErrorCodes.NOT_FOUND_ERROR, service, data);
  }
}

export { NotFoundException };
