import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import cookieSession from 'cookie-session';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ['sameh-othman'],
  }),
);

app.get('/', async (req: Request, res: Response) => {
  res.send(`
    <div> you are not logged in <a href="/login"> Login </> </div>
    `);
});

app.get('/login', async (req: Request, res: Response) => {
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
});

app.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (email === 'aa' && password === 'bb') {
    if (req.session) req.session.signedIn = true;
    res.redirect('/');
    return;
  }
  res.send(`Invlid email & password <a href="/login">Login</a>`);
});

app.listen(3000, () => {
  console.log('app working on port 3000');
});
