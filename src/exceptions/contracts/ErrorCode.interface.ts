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
    statusCode: 500,
  },
  ALREADY_EXISTS_ERROR: {
    code: 'SERVICE_ERROR',
    message: 'Already exists an entity with this param',
    statusCode: 422,
  },
  NOT_FOUND_ERROR: {
    code: 'SERVICE_NOT_FOUND_ERROR',
    message: 'This page does not exists',
    statusCode: 404,
  },
  BAD_REQUEST_ERROR: {
    code: 'BAD_REQUEST_ERROR',
    message: 'this request cannot be process',
    statusCode: 400,
  },
  FORBIDDEN_ERROR: {
    code: 'FORBIDDEN_ERROR',
    message: 'this request has be forbidden',
    statusCode: 403,
  },
  UNAUTHORIZED_ERROR: {
    code: 'UNAUTHORIZED_ERROR',
    message: 'you dont have the privileges for this',
    statusCode: 401,
  },
  LOGIN_ERROR: {
    code: 'LOGIN_ERROR',
    message: 'email or pass dont match',
    statusCode: 406,
  },
};
