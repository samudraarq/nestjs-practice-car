import { CanActivate, ExecutionContext } from '@nestjs/common';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    // if the user is logged in, allow the request (must return truthy)
    // if the user is not logged in, reject the request
    return request.session.userId;
  }
}
