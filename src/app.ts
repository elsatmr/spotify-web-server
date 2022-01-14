import express, { Request, Response } from 'express';
import SearchController from './controllers/Search.controller';

const app = express();
const searchRouter = express.Router();
const testRouter = express.Router();

searchRouter.get(
  '/api/v1/auth/search/:searchTerm',
  SearchController.getSearchResult
);

app.use(express.json());
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello World!');
});
app.use(searchRouter);

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
