import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const port: number = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
express.urlencoded({ extended: true })

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

app.post('/submit', async (req, res) => {
    const { title, author, description, genre, page } = req.body;

    const genresArray = Array.isArray(genre) ? genre : (genre ? [genre] : []);

    const url = 'https://queer-books-api.onrender.com/books/new';

    const formBody = new URLSearchParams({
        title,
        author,
        description,
        page
    });

    genresArray.forEach(genreItem => {
        formBody.append('genre', genreItem);
    });

    try {
        const apiResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formBody.toString(),
        });

        const result = await apiResponse.json();
        console.log('API response:', result);
    } catch (error) {
        console.error('Error submitting to API:', error);
    }

    res.sendFile(path.join(__dirname, 'public', 'submit.html'));
});

app.listen(port, () => {
    console.log(`Listening on port: http://localhost:${port}`);
});


