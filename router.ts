import express from 'express';
import path from 'path';

const app = express();
const port = 3000;
const options = { root: path.join(__dirname, "../public") };


app.use(express.static(path.join(__dirname, "../public")));


app.get("/", (req, res) => {
    res.sendFile("index.html", (err) => {
        if (err) {
            res.status(500).send("File not found");
        }
    });
});


app.get("/discover", (req, res) => {
    res.sendFile("discover.html", (err) => {
        if (err) {
            res.status(500).send("File not found");
        }
    });
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
