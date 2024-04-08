import { Request, Response } from 'express';
import { Controller, GET, Use } from '../decorators';
import { requireAuth } from '../middlewares/requireAuth';

@Controller('/protected')
export class ProtectedController {
  @GET('')
  @Use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('this is protected');
  }
}
