import 'reflect-metadata';
import { MetaDataKeys, ReqMethods } from './types';
import { appRouter } from '../AppRouter';

export const Controller = (basePath: string) => {
  return function (target: any) {
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata(
        MetaDataKeys.PATH,
        target.prototype,
        key,
      );
      const method: ReqMethods = Reflect.getMetadata(
        MetaDataKeys.METHOD,
        target.prototype,
        key,
      );
      const middlewares =
        Reflect.getMetadata(MetaDataKeys.MIDDLEWARES, target.prototype, key) ||
        [];
      const urlPath = basePath + path;
      if (urlPath && method) {
        console.log('setting path ', method, basePath + path);

        appRouter[method](urlPath, [...middlewares, routeHandler]);
      }
    }
  };
};
