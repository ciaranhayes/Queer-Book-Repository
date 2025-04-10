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
function retrieveBook(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `https://queer-books-api.onrender.com/books/${id}`;
        const response = yield fetch(url);
        const data = yield response.json();
        const title = data.title;
        const author = data.author;
        const genres = JSON.stringify(data.genres.join(', '));
        const description = data.short_description;
        const htmlFeaturedBook = `
    <div class="container">
        <h2>${title}</h2>
        <p>${author}</p>
        <p>${description}</p>
        <p>${genres}</p>
    </div>
    `;
        $('#featured').html(htmlFeaturedBook);
        console.log();
    });
}
retrieveBook('67e6e780f3ee5d721bcbd75e');
