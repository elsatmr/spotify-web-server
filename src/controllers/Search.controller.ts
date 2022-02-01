import { Request, Response, NextFunction } from 'express';
import BaseController from './Base.controller';
import querystring from 'query-string';
import axios, { AxiosResponse } from 'axios';

class Search extends BaseController {
  public getSearchResult = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    return this.makeRequest(
      async () => {
        const urlBody = {
          q: req.params.searchTerm,
          type: 'track,artist,album,show',
          limit: 5,
          include_external: 'audio',
        };

        const config = {
          headers: {
            Authorization: req.params.accessToken,
            'Content-Type': `application/json`,
          },
        };

        const searchURL =
          `https://api.spotify.com/v1/search` + querystring.stringify(urlBody);

        const res: AxiosResponse = await axios.post(searchURL, null, config);

        console.log(res.data);

        return {
          data: res.data,
        };
      },
      res,
      next
    );
  };
}

export default new Search();
