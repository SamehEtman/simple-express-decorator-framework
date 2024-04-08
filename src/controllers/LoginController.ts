import { Request, Response } from 'express';
import { GET, Controller, POST } from '../decorators';

@Controller('/auth')
export class LoginController {
  @GET('/login')
  getLogin(req: Request, res: Response) {
    res.send(`
        <form method="POST" > 
            <div>
                <label for="email">Email</label>
                <input name="email" />
            </div>
            <div style='margin-top: 12px;'>
                <label for="password">Password</label>
                <input name="password" />
            </div>
            <button style='margin-top: 12px;' type="submit">Login</button>
        </form>
    `);
  }

  @POST('/login')
  login(req: Request, res: Response) {
    const { email, password } = req.body;
    if (email === 'aa' && password === 'bb') {
      if (req.session) req.session = { signedIn: true };
      res.redirect('/');
      return;
    }
    res.send(`Invlid email & password <a href="/login">Login</a>`);
  }

  @GET('/logout')
  logout(req: Request, res: Response) {
    req.session = { signedIn: undefined };
    res.redirect('/');
  }
}
