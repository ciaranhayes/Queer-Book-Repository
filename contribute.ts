function getGenreCheckbox(genre: string): void {
    const htmlGenreCheckList = `
        <div class="p-3 form-check">
            <input type="checkbox" class="form-check-input" name="genre" value="${genre}">
            <label class="form-check-label">${genre}</label>
        </div>
    `
    $('#genreCheckbox').append(htmlGenreCheckList);
}

getGenreCheckbox('Romance');
getGenreCheckbox('Coming of Age');
getGenreCheckbox('Literary Fiction');
getGenreCheckbox('Fantasy');
getGenreCheckbox('Young Adult');
getGenreCheckbox('Contemporary');
getGenreCheckbox('Adventure');
getGenreCheckbox('Lesbian Fiction');
getGenreCheckbox('LGBTQIA+');
getGenreCheckbox('Historical Fiction');
getGenreCheckbox('Graphic Novel');
getGenreCheckbox('Memoir');
getGenreCheckbox('Transgender');
getGenreCheckbox('Non-fiction');
getGenreCheckbox('Gothic Fiction');
getGenreCheckbox('Philosophy');
getGenreCheckbox('Thriller');
getGenreCheckbox('Mystery');
getGenreCheckbox('Comedy');
getGenreCheckbox('Poetry');
getGenreCheckbox('Science Fiction');
getGenreCheckbox('Horror');