import { ErrorCode } from './contracts/ErrorCode.interface';

class GenericException extends Error {
  constructor(
    public code: ErrorCode,
    public service?: string,
    public data?: any,
  ) {
    super();
  }
}

export { GenericException };
