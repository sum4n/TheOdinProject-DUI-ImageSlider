
const imgList = ['bird1.jpg', 'bird2.jpg', 'bird3.jpg',
                 'bird4.jpg', 'bird5.jpg'];

const imgListLength = imgList.length;

const previousImage = document.getElementById("previousImage");
const nextImage = document.getElementById("nextImage");
const navDotsList = document.querySelectorAll(".dots");

function getImageIndex() {
    const imgLive = document.getElementById("carousel");
    const imgLiveSrc = imgLive.getAttribute("src").slice(9);

    let liveIndex = imgList.indexOf(imgLiveSrc);

    return [imgLive, liveIndex];
}

function imgTransition(img) {
    if (img.style.animationName === "myKey") {
        img.style.animationName = "nKey";
    } else {
        img.style.animationName = "myKey"
    }
}

function markUnmarkNavDot(index, liveImgIndex) {
    navDotsList[index].style.background = "white";
    navDotsList[liveImgIndex].style.background = "";
}


function showNextImage() {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    let [imgLive, liveIndex] = getImageIndex();
    
    if (liveIndex === 4) {
        imgLive.src =  `./images/${imgList[0]}`;
        markUnmarkNavDot(0, liveIndex);
    } else {
        imgLive.src = `./images/${imgList[liveIndex + 1]}`;
        markUnmarkNavDot(liveIndex + 1, liveIndex);
    }

    imgTransition(imgLive);
}

function showPreviousImage() {
    
    let [imgLive, liveIndex] = getImageIndex();
    
    if (liveIndex === 0) {
        imgLive.src =  `./images/${imgList[4]}`;
        markUnmarkNavDot(4, liveIndex);
    } else {
        imgLive.src = `./images/${imgList[liveIndex - 1]}`;
        markUnmarkNavDot(liveIndex - 1, liveIndex);
    }
    
    imgTransition(imgLive);
}

previousImage.addEventListener("click", () => {
    showPreviousImage();
});

nextImage.addEventListener("click", () => {
    showNextImage();
})

window.addEventListener("load", () => {
    let index = getImageIndex()[1];
    markUnmarkNavDot(index, 2);
})