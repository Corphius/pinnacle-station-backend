import { ArgumentsHost } from '@nestjs/common';

export const getHttpData = (host: ArgumentsHost) => {
  const context = host.switchToHttp();
  return {
    request: context.getRequest(),
    response: context.getResponse(),
    date: new Date().toISOString(),
  };
};
