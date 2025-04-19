"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.static('build', {
    setHeaders: (res, path) => {
        if (path.endsWith('.js')) {
            res.set('Content-Type', 'application/javascript');
        }
    }
}));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'public', 'index.html'));
});
app.get('/discover', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'public', 'discover.html'));
});
app.get('/genre', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'public', 'genre.html'));
});
app.get('/library', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'public', 'library.html'));
});
app.get('/contribute', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'public', 'contribute.html'));
});
app.post('/submit', (req, res) => {
    const { title, author, description, genres, page } = req.body;
    const url = 'https://queer-books-api.onrender.com/books/new';
    const response = fetch(url);
    console.log('Title:', title);
    console.log('Author:', author);
    console.log('Description:', description);
    console.log('Genres:', genres);
    console.log('Page:', page);
    res.sendFile(path_1.default.join(__dirname, 'public', 'submit.html'));
});
app.listen(port, () => {
    console.log(`Listening on port: http://localhost:${port}`);
});
console.log(path_1.default.join(__dirname, 'public'));
