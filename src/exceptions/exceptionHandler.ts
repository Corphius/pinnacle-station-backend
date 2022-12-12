import { ArgumentsHost, Catch } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

import { getHttpData } from 'src/utils/exceptionHandler.util';
import { ErrorCodes } from './contracts/ErrorCode.interface';
import { AlreadyExistsException } from './Error/AlreadyExists.execption';
import { GenericException } from './Error/Generic.exception';
import { LoginException } from './Error/Login.execption';
import { NotFoundException } from './Error/NotFound.execption';
import { ServiceException } from './Error/Service.exception';

const buildMessage = (errorCode, params?) => {
  return {
    code: errorCode.code,
    message: errorCode.message,
    ...params,
  };
};

@Catch(GenericException)
export class ExceptionHandler extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const { request, response } = getHttpData(host);
    console.log(exception);
    switch (exception.constructor) {
      case GenericException: {
        request
          .status(exception.code.statusCode)
          .json(buildMessage(exception.code));
        return;
      }
      case NotFoundException: {
        response.status(ErrorCodes.NOT_FOUND_ERROR.statusCode).json(
          buildMessage(ErrorCodes.NOT_FOUND_ERROR, {
            param: exception.param,
          }),
        );
        return;
      }
      case ServiceException: {
        response.status(ErrorCodes.SERVICE_ERROR.statusCode).json(
          buildMessage(ErrorCodes.SERVICE_ERROR, {
            serviceName: exception.service,
            data: exception.data,
          }),
        );
        return;
      }
      case AlreadyExistsException: {
        response
          .status(exception.code.statusCode)
          .json(buildMessage(exception.code));
        return;
      }
      case LoginException: {
        response.status(ErrorCodes.LOGIN_ERROR.statusCode).json(
          buildMessage(ErrorCodes.LOGIN_ERROR, {
            param: exception.param,
          }),
        );
        return;
      }
      default:
        response
          .status(ErrorCodes.INTERNAL_SERVER_ERROR.statusCode)
          .json(buildMessage(ErrorCodes.INTERNAL_SERVER_ERROR));
    }
    return;
  }
}
