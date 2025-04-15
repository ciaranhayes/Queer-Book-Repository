interface Book {
    title: string;
    author: string;
    genres: string[];
    short_description: string;
    page_length: number;
}

async function getGenreBook(genre: string, section: string, order: string): Promise<void> {
    const url = `https://queer-books-api.onrender.com/books/genre/${genre}`

    const response = await fetch(url);

    var data = await response.json();

    const newSection = `<section id="${section}" class="${order} container-fluid pt-2 pb-2 mb-5" style="background-color:#1F253F;"></section>`;
    const htmlGenreTitle = `<h2 class="featured p-2 rounded-3 mt-3 mx-auto">${genre}</h2>` 
    const bookContainingDiv = `<div class="${section} container mt-4 mb-4 d-flex flex-row justify-content-around flex-wrap"></div>`
    
    $('#genre-hold').append(newSection);

    $(`#${section}`).append(htmlGenreTitle);
    
    $(`#${section}`).append(bookContainingDiv);
    
    data.forEach((book: Book) => {
        const { title, author, genres, short_description, page_length } = book;
    
    const htmlGenreBook = `
        <div class="card mb-5" style="max-width:300px; min-width:200px order-2">
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
}

$( getGenreBook('Romance', 'romance', 'oder-1') )
$( getGenreBook('Coming of Age', 'coming-of-age', 'oder-2') )
$( getGenreBook('Literary Fiction', 'literary-fiction', 'oder-3') )
$( getGenreBook('Fantasy', 'fantasy', 'oder-4') )
$( getGenreBook('Young Adult', 'young-adult', 'oder-5') )
$( getGenreBook('Contemporary', 'contemporary', 'oder-6') )
$( getGenreBook('Adventure', 'adventure', 'oder-7') )
$( getGenreBook('Lesbian Fiction', 'lesbian-fiction', 'oder-8') )
$( getGenreBook('LGBTQIA+', 'lgbtqia', 'oder-9') )
$( getGenreBook('Historical Fiction','historical-fiction', 'oder-10') )
$( getGenreBook('Graphic Novel', 'graphic-novel', 'oder-11') )
$( getGenreBook('Memoir', 'memoir', 'oder-12') )
$( getGenreBook('Transgender', 'transgender', 'oder-13') )
$( getGenreBook('Non-fiction', 'non-fiction', 'oder-14') )
$( getGenreBook('Gothic Fiction', 'gothic-fiction', 'oder-15') )
$( getGenreBook('Philosophy', 'philosophy', 'oder-16') )
$( getGenreBook('Thriller', 'thriller', 'oder-17') )
$( getGenreBook('Mystery', 'mystery', 'oder-18') )
$( getGenreBook('Comedy', 'comedy', 'oder-19') )
$( getGenreBook('Poetry', 'poetry', 'oder-20') )
$( getGenreBook('Science Fiction', 'science-fiction', 'oder-21') )
$( getGenreBook('Horror', 'horror', 'oder-22') )

