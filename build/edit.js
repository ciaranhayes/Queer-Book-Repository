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
function getBookToEdit() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = "https://queer-books-api.onrender.com/books";
        const response = yield fetch(url);
        const data = yield response.json();
        data.forEach((book) => {
            const { _id, title, author, genres, short_description, page_length } = book;
            const htmlFeaturedBook = `
            <div class="card mb-5" style="max-width:300px; min-width:200px">
                <div class="card-header">
                    <h2 class="bookTitle">${title}</h2>
                    <p style="font-style:italic;">${author}</p>
                </div>
                <div class="card-body">
                    <p>${short_description}</p>
                    <p>${page_length} pages</p>
                </div>
                <div class="card-footer">${genres.join(", ")}</div>
                <div class="card-footer">
                    <button 
                        type="button" 
                        class="editButton btn btn-warning" 
                        data-id="${_id}">
                        Edit
                    </button>
                </div>
            </div>`;
            $('#searchToEdit').append(htmlFeaturedBook);
        });
        $('#searchToEdit').on('click', '.editButton', function () {
            const bookId = $(this).data('id');
            $('#idToEdit').val(bookId);
        });
    });
}
$(getBookToEdit);
