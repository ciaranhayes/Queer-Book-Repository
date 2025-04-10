async function fetchBooks() {
    const url: string = "https://queer-books-api.onrender.com/books";

    const response = await fetch(url);

    const data = await response.json();

    data.forEach((element: any) => {
        const title:string = element.title;
        const author:string = element.author;
        const genres:string = element.genres.join(', ');
        const description:string = element.short_description;
        const length: number = element.page_length;

        const htmlFeaturedBook = `
        <div class="card mb-5" style="max-width:300px; min-width:200px">
            <div class="card-header">
                <h2>${title}</h2>
                <p style="font-style:italic;">${author}</p>
            </div>
            <div class="card-body">
                <p>${description}</p>
                <p>${length} pages</p>
            </div>
            <div class="card-footer">${genres}</div>
        </div>`

        $('#featured').append(htmlFeaturedBook);
    });
}

fetchBooks();