$(function() {
    $('.filter-search').on("keyup", function(){
        const rawVal = $(this).val()
        let searchTerm = (typeof rawVal === 'string' ? rawVal: '').toLowerCase();

        $('.card').each(function(){
            const title = $(this).find('.bookTitle').text().toLowerCase();
            const match = title.includes(searchTerm);
            $(this).toggle(match);
        });
    });
})



