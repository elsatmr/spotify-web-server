import { Request, Response, NextFunction, response } from 'express';
import BaseController from './Base.controller';
import querystring from 'query-string';
import axios, { AxiosResponse } from 'axios';
import { encodedClientIDSecret } from '../utils/Spotify.util';

class Auth extends BaseController {
  public getAccessToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    return this.makeRequest(
      async () => {
        const urlBody = {
          grant_type: 'authorization_code',
          code: req.params.authCode,
          redirect_uri: 'http://localhost:3000/search',
        };

        const tokenURL =
          'https://accounts.spotify.com/api/token?' +
          querystring.stringify(urlBody);

        const config = {
          headers: {
            Authorization: 'Basic ' + encodedClientIDSecret,
            'Content-Type': `application/x-www-form-urlencoded`,
          },
        };

        const res: AxiosResponse = await axios.post(tokenURL, null, config);
        console.log(res);
        return {
          data: res.data,
        };
      },
      res,
      next
    );
  };

  public getRefreshToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    return this.makeRequest(
      async () => {
        const urlBody = {
          grant_type: 'refresh_token',
          refresh_token: req.params.refreshToken,
        };

        const tokenURL =
          'https://accounts.spotify.com/api/token?' +
          querystring.stringify(urlBody);

        const config = {
          headers: {
            Authorization: 'Basic ' + encodedClientIDSecret,
            'Content-Type': `application/x-www-form-urlencoded`,
          },
        };

        const res: AxiosResponse = await axios.post(tokenURL, null, config);
        console.log(res);
        return {
          data: res.data,
        };
      },
      res,
      next
    );
  };
}

export default new Auth();
