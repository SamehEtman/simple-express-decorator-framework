import 'reflect-metadata';
import { MetaDataKeys, ReqMethods } from './types';

const getMethodDefinition = (methodType: ReqMethods) => {
  return (path: string) => {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetaDataKeys.PATH, path, target, key);
      Reflect.defineMetadata(MetaDataKeys.METHOD, methodType, target, key);
    };
  };
};

export const GET = getMethodDefinition(ReqMethods.GET);
export const POST = getMethodDefinition(ReqMethods.POST);
export const DELETE = getMethodDefinition(ReqMethods.DEL);
export const PUT = getMethodDefinition(ReqMethods.PUT);
export const PATCH = getMethodDefinition(ReqMethods.PATCH);
