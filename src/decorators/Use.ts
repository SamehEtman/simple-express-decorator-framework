import 'reflect-metadata';
import { MetaDataKeys } from './types';
import { RequestHandler } from 'express';

export const Use = (middleware: RequestHandler | RequestHandler[]) => {
  const middlewares = middleware instanceof Array ? middleware : [middleware];
  return (target: any, key: string) => {
    Reflect.defineMetadata(MetaDataKeys.MIDDLEWARES, middlewares, target, key);

    
  };
};
