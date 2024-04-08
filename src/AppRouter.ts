import express from 'express';

export class AppRouter {
  private static router: express.Router;

  public static getInstance() {
    if (!AppRouter.router) {
      AppRouter.router = express.Router();
    }
    return AppRouter.router;
  }
}

export const appRouter = AppRouter.getInstance()