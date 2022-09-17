function genHex() {
    var a = Math.round(Math.random()*10);
    return a;
}

function chngBack() {
    document.body.style.backgroundColor = '#' + genHex() + genHex() + genHex() + genHex() + genHex() + genHex();
}

