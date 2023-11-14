import express from 'express';
import path from 'path'

const app = express();

app.get('/api', (_req, res) => {
  res.send('Hello World!');
});

// Retour all non-api endpoints to React app
app.static(path.join(__dirname, '../build'));
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
