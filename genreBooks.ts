interface Book {
    title: string;
    author: string;
    genres: string[];
    short_description: string;
    page_length: number;
}

async function getGenreBook(genre: string, section: string) {
    const url = `https://queer-books-api.onrender.com/books/genre/${genre}`

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    const newSection = `<section id="${section}" class="container-fluid pt-2 pb-2 mb-5p"></section>`
    const htmlGenreTitle = `<h2 class="featured p-2 rounded-3 mt-3 mx-auto">${genre}</h2>` 
    const bookContainingDiv = `<div class="${section} container mt-4 mb-4 d-flex flex-row justify-content-around flex-wrap"></div>`
    
    $('#genre-hold').prepend(newSection);
    
    $(`#${section}`).append(bookContainingDiv);
    
    data.forEach((book: Book) => {
        const { title, author, genres, short_description, page_length } = book;
    
    const htmlGenreBook = `
        <div id="${section}" class="card mb-5" style="max-width:300px; min-width:200px order-2">
            <div class="card-header">
                <h2>${title}</h2>
                <p style="font-style:italic;">${author}</p>
            </div>
            <div class="card-body">
                <p>${short_description}</p>
                <p>${page_length} pages</p>
            </div>
            <div class="card-footer">${genres.join(", ")}</div>
        </div>`
        $(`.${section}`).append(htmlGenreBook);
    });

    $(`#${section}`).prepend(htmlGenreTitle);
}

$( getGenreBook('Romance', 'romance') )
$( getGenreBook('Coming of Age', 'coming-of-age'))