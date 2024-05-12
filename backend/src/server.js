import express from 'express';
import cors from 'cors';
import foodRouter from './routers/food.router.js';
const app = express();

app.use(
  cors({
    credentials: true,
    origin: ['https://3000-monospace-ifood2-1715214724170.cluster-kc2r6y3mtba5mswcmol45orivs.cloudworkstations.dev'],
  })
);

app.use('/api/foods', foodRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});