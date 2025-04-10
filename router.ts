import express from 'express';
import path from 'path';

const app = express();
const port: number = 3000;
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('build', { 
    setHeaders: (res, path) => {
      if (path.endsWith('.js')) {
        res.set('Content-Type', 'application/javascript');
      }
    }
  }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/discover', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'discover.html'));
});

app.get('/genre', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'genre.html'));
});

app.get('/library', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'library.html'));
});

app.get('/contribute', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contribute.html'));
});

app.listen(port, () => {
    console.log(`Listening on port: http://localhost:${port}`);
});

console.log(path.join(__dirname, 'public'));

