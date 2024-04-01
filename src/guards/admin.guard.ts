import { CanActivate, ExecutionContext } from '@nestjs/common';

export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    if (!request.currentUser) {
      return false;
    }

    // return true if currentUser is an admin
    // currentUser is set in the current-user interceptor
    return request.currentUser.admin;
  }
}
