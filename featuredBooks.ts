async function retrieveBook(id: string) {
    const url = `https://queer-books-api.onrender.com/books/${id}`

    const response = await fetch(url);

    const data = await response.json();
    
    const title:string = data.title;
    const author:string = data.author;
    const genres:string = data.genres.join(', ');
    const description:string = data.short_description;

    const htmlFeaturedBook = `
    <div class="card mb-5" style="max-width:300px; min-width:200px">
        <div class="card-header">
            <h2>${title}</h2>
            <p style="font-style:italic;">${author}</p>
        </div>
        <div class="card-body">
            <p>${description}</p>
        </div>
        <div class="card-footer">${genres}</div>
    </div>`

    $('#featured').append(htmlFeaturedBook);
}
$( retrieveBook('67e6e780f3ee5d721bcbd75e') )
$( retrieveBook('67e6e780f3ee5d721bcbd766') )
$( retrieveBook('67e6e780f3ee5d721bcbd762') )
$( retrieveBook('67e6e780f3ee5d721bcbd770') )