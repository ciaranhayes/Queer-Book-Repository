"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
const options = { root: path_1.default.join(__dirname, "../public") };
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
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
