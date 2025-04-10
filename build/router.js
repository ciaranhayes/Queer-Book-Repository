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
app.listen(port, () => {
    console.log(`Listening on port: http://localhost:${port}`);
});
console.log(path_1.default.join(__dirname, 'public'));
