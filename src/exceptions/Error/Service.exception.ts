import { ErrorCodes } from '../contracts/ErrorCode.interface';
import { GenericException } from './Generic.exception';

class ServiceException extends GenericException {
  constructor(service: string, data?: any) {
    super(ErrorCodes.SERVICE_ERROR, service, data);
  }
}

export { ServiceException };
