import express from 'express';
import path from 'path';

const app = express();
const port: number = 3000;
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/discover", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'discover.html'));
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});


