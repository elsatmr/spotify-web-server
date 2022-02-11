import e, { Request, Response, NextFunction } from 'express';
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
          query: req.params.searchTerm,
          type: 'album,show,track,artist',
          limit: 10,
        };

        const config = {
          headers: {
            Authorization: `Bearer ` + req.params.accessToken,
            'Content-Type': `application/json`,
          },
        };

        const searchURL =
          `https://api.spotify.com/v1/search?` + querystring.stringify(urlBody);

        console.log(searchURL);

        const res: AxiosResponse = await axios.get(searchURL, config);

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
