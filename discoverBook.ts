async function discoverBooks() {
    const url:string = "https://queer-books-api.onrender.com/recommendation";

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    const title:string = data[0].title;
    const author:string = data[0].author;
    const genres:string[] = data[0].genres.join(', ');
    const description:string = data[0].short_description;
    const length: number = data[0].page_length;

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

    $('#discover').html(htmlFeaturedBook);
}

$( discoverBooks() )