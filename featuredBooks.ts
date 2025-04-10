async function retrieveBook(id: string) {
    const url = `https://queer-books-api.onrender.com/books/${id}`

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`)
        }

        const data = await response.json();

        const title = data.title;
        const author = data.author;
        const genres = JSON.stringify(data.genres.join(', '));

        

        
    } catch (error) {
        console.error('Error fetching book data: ', error);
    }

}

retrieveBook('67e6e780f3ee5d721bcbd75e');

