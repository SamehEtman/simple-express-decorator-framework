import { NextFunction, Request, Response } from 'express';

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log('iam here in the middleware');
  if (req.session?.signedIn) {
    next();
    return;
  }
  res
    .status(403)
    .send('Forbidded go to <a href="/auth/login"> Login </a>')
    .end();
  return;
};

