import express, { Express } from 'express';

export const useStatic = (app: Express, urlPath: string, dirPath: string) => {
  app.use(urlPath, express.static(dirPath));
};
