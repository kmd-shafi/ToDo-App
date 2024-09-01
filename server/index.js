import express from 'express'
const app = express();

app.get('/hello', (req, res) => {
    console.log('Catch-all route hit!');
    res.send('Catch-all response');
  });

  app.listen(8000, () => {
    console.log('Express server listening on port 8000');
  });