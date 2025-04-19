"use strict";
function getGenreCheckbox(genre) {
    const htmlGenreCheckList = `
        <div class="p-3 form-check">
            <input type="checkbox" class="form-check-input" name="genre" value="${genre}">
            <label class="form-check-label">${genre}</label>
        </div>
    `;
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
$(() => {
    $('#nav-home-tab').on('click', () => {
        switchTab('home');
    });
    $('#nav-profile-tab').on('click', () => {
        switchTab('profile');
    });
    $('#nav-contact-tab').on('click', () => {
        switchTab('contact');
    });
    function switchTab(tab) {
        $('.nav-link').removeClass('active');
        $('.tab-pane').removeClass('show active');
        $(`#nav-${tab}-tab`).addClass('active');
        $(`#nav-${tab}`).addClass('show active');
    }
});
