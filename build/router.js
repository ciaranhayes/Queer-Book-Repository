"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(body_parser_1.default.urlencoded({ extended: true }));
express_1.default.urlencoded({ extended: true });
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
app.post('/submit', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, author, description, genre, page } = req.body;
    // Ensure genre is an array, even if only one genre is selected
    const genresArray = Array.isArray(genre) ? genre : (genre ? [genre] : []);
    const url = 'https://queer-books-api.onrender.com/books/new';
    // Create formBody and append genres
    const formBody = new URLSearchParams({
        title,
        author,
        description,
        page
    });
    // Append each selected genre to the form body
    genresArray.forEach(genreItem => {
        formBody.append('genre', genreItem);
    });
    try {
        const apiResponse = yield fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formBody.toString(),
        });
        const result = yield apiResponse.json();
        console.log('API response:', result);
    }
    catch (error) {
        console.error('Error submitting to API:', error);
    }
    // Log submitted data
    console.log('Title:', title);
    console.log('Author:', author);
    console.log('Description:', description);
    console.log('Genres:', genresArray);
    console.log('Page:', page);
    res.sendFile(path_1.default.join(__dirname, 'public', 'submit.html'));
}));
app.listen(port, () => {
    console.log(`Listening on port: http://localhost:${port}`);
});
