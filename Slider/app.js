document.addEventListener('keydown', function(e){
    if(e.keyCode === 37){
        changeImage(-1);
    } else if(e.keyCode === 39){
        changeImage(1);
    }
});

function changeImage (direction) {
    var imageContainer = document.getElementById("image");
    var source = imageContainer.src;
    var splittedSource = source.split("/");
    var currentSrc = splittedSource[splittedSource.length - 1];
    currentSrc = Number(currentSrc.split(".")[0]);
    if(direction === 1) {
        currentSrc++;
    } else {
        currentSrc--;
    }
    if (currentSrc > 5) {
        currentSrc = 1;
    } else if (currentSrc < 1) {
        currentSrc = 5;
    }
    imageContainer.src = "images/" + currentSrc + ".jpg";
    //console.log(currentSrc)
}

function clicked (a) {
    var imageContainer = document.getElementById("image");
    var source = imageContainer.src;
    console.log(a);
    if(a === "selector1") {
        imageContainer.src = "images/1.jpg";
    } else if (a === "selector2") {
        imageContainer.src = "images/2.jpg";
    } else if (a === "selector3") {
        imageContainer.src = "images/3.jpg";
    } else if (a === "selector4") {
        imageContainer.src = "images/4.jpg";
    } else {
        imageContainer.src = "images/5.jpg";
    }
}