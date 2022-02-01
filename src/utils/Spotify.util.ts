import axios from 'axios';
import dotenv from 'dotenv';
import querystring from 'query-string';

dotenv.config();

const clientID = process.env.SPOTIFY_CLIENTID || '';
const clientSecret = process.env.SPOTIFY_CLIENTSECRET || '';

const encode = (str: string): string =>
  Buffer.from(str, 'binary').toString('base64');

export const encodedClientIDSecret = encode(clientID + ':' + clientSecret);

const scope: string = 'user-read-private';

enum URLS {
  DEV = 'http://localhost:3000/',
  SEARCH = 'http://localhost:3000/search',
}

export enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
