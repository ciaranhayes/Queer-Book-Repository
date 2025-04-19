interface Book {
    _id: string;
    title: string;
    author: string;
    genres: string[];
    short_description: string;
    page_length: number;
}

async function getBookToDelete(): Promise <void> {
    const url: string = "https://queer-books-api.onrender.com/books";

    const response = await fetch(url);

    const data = await response.json();
    
    data.forEach((book: Book) => {
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
                        class="editButton btn btn-danger" 
                        data-id="${_id}">
                        Delete
                    </button>
                </div>
            </div>`;

        $('#searchToDelete').append(htmlFeaturedBook);
    });

    $('#searchToDelete').on('click', '.editButton', function () {
        const bookId = $(this).data('id');
        $('#idToDelete').val(bookId);
        $('#deleteSubmit').slideToggle('slow');
    });
}

$( getBookToDelete() );




