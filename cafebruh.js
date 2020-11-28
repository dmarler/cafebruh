const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a, rs-layer, title, head');

for (let i = 0; i < text.length; i++) {
    if (text[i].innerHTML.includes('Cardboard Corner')) {
        text[i].innerHTML = text[i].innerHTML.replace(/Cardboard Corner/g, 'Cafe Bruh');
    }
}

const addresses = document.querySelectorAll('footer a');
for (let i = 0; i < addresses.length; i++) {
    if (addresses[i].innerHTML.includes('cardboardcorner')) {
        addresses[i].innerHTML = addresses[i].text.replace(/cardboardcorner/g, 'cafebruh');
    }
}