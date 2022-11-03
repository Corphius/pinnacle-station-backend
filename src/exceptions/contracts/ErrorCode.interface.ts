export interface ErrorCode {
  code: string;
  message: string;
}

export const ErrorCodes = {
  INTERNAL_SERVER_ERROR: {
    code: 'INTERNAL_SERVER_ERROR',
    message: 'Internal Server Error',
    statusCode: 500,
  },
  SERVICE_ERROR: {
    code: 'SERVICE_ERROR',
    message: 'Some Error ocurred on the service please check in',
    status: 500,
  },
};
