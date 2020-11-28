// jQuery("body").children().each(function() {
//     jQuery(this).html(jQuery(this).html().replace('Cardboard Corner', 'Cafe Bruh'));
// });

// page = jQuery("html").html();

// jQuery("html").html(page.replace(/Cardboard Corner/g, 'Cafe Bruh'));

const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a, rs-layer, title, head');

for (let i = 0; i < text.length; i++) {
    if (text[i].innerHTML.includes('Cardboard Corner')) {
        text[i].innerHTML = text[i].innerHTML.replace(/Cardboard Corner/g, 'Cafe Bruh');
    }
}