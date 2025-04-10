async function retrieveBook(id: string) {
    const url = `https://queer-books-api.onrender.com/books/${id}`

    const response = await fetch(url);

    const data = await response.json();

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
    `
    
    $('#featured').html(htmlFeaturedBook);
    console.log();
    
}

retrieveBook('67e6e780f3ee5d721bcbd75e');
