import { Request, Response, NextFunction } from 'express';
import BaseController from './Base.controller';
import axios, { AxiosResponse } from 'axios';
import { authUser } from '../utils/Spotify.util';
import filejs from '../../searchfiles.json';

class Search extends BaseController {
  public getSearchResult = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    return this.makeRequest(
      async () => {
        const searchTerm = req.params.searchTerm;
        const res: any = [];
        filejs.forEach((elem) => {
          if (elem.id === searchTerm) {
            res.push(elem);
          }
        });
        return {
          data: res,
        };
      },
      res,
      next
    );
  };
}

export default new Search();
