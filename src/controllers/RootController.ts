import { Request, Response } from 'express';
import { Controller, GET } from '../decorators';

@Controller('')
export class RootController {
  @GET('/')
  getHome(req: Request, res: Response) {
    if (req.session?.signedIn) {
      res.send(`
        <div> you are logged in <a href="/auth/logout"> Logout</a> </div>
        <div> go to <a href="/protected">protected route </a> </div>
        `);
    } else {
      res.send(`
        <div> you are not logged in <a href="/auth/login"> Login </> </div>

        `);
    }
  }
}
