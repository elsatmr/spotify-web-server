import express, { Request, Response } from 'express';
import SearchController from './controllers/Search.controller';
import AuthController from './controllers/AuthController';

const app = express();
const router = express.Router();

router.get(
  '/api/v1/search/:searchTerm/:accessToken',
  SearchController.getSearchResult
);

router.get('/api/v1/auth/login/:authCode', AuthController.getAccessToken);

router.get(
  '/api/v1/auth/refresh/:refreshToken',
  AuthController.getRefreshToken
);

app.use(express.json());
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello World!');
});

app.use(router);

app.get('/songs/Phoenix-TTBC.mp3', (req: Request, res: Response) => {
  res.status(200).download('./songs/Phoenix-TTBC.mp3');
});

app.get('/songs/Phoenix-Chloroform.mp3', (req: Request, res: Response) => {
  res.status(200).download('./songs/Phoenix-Chloroform.mp3');
});

app.get('/songs/Monolog-Restaurant.mp3', (req: Request, res: Response) => {
  res.status(200).download('./songs/Monolog-Restaurant.mp3');
});

export default app;
