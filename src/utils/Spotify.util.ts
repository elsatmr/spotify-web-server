import axios from 'axios';
import dotenv from 'dotenv';
import querystring from 'query-string';

dotenv.config();

const clientID = process.env.SPOTIFY_CLIENTID || '';
const clientSecret = process.env.SPOTIFY_CLIENTSECRET || '';
const scope: string = 'user-read-private';

enum URLS {
  DEV = 'http://localhost:3000/',
}

export enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

let authURLObjects = {
  response_type: 'token',
  client_id: clientID,
  scope: scope,
  redirect_uri: URLS.DEV,
};

export async function authUser(urlObjects = authURLObjects) {
  const url =
    'https://accounts.spotify.com/authorize?' +
    querystring.stringify(urlObjects);
}
