
const imgList = ['bird1.jpg', 'bird2.jpg', 'bird3.jpg',
                 'bird4.jpg', 'bird5.jpg'];

const imgListLength = imgList.length;


function showNextImage() {
    
    const imgLive = document.getElementById("carousel");
    const imgLiveSrc = imgLive.getAttribute("src").slice(9);

    let liveIndex = imgList.indexOf(imgLiveSrc);
    
    if (liveIndex === 4) {
        imgLive.src =  `./images/${imgList[0]}`;
    } else {
        imgLive.src = `./images/${imgList[liveIndex + 1]}`;
    }
    // change(rotate) animation name to show the animation.
    if (imgLive.style.animationName === "myKey") {
        imgLive.style.animationName = "nKey";
    } else {
        imgLive.style.animationName = "myKey";
    }
}

function showPreviousImage() {
    
    const imgLive = document.getElementById("carousel");
    const imgLiveSrc = imgLive.getAttribute("src").slice(9);

    let liveIndex = imgList.indexOf(imgLiveSrc);
    
    if (liveIndex === 0) {
        imgLive.src =  `./images/${imgList[4]}`;
    } else {
        imgLive.src = `./images/${imgList[liveIndex - 1]}`;
    }
    
    if (imgLive.style.animationName === "myKey") {
        imgLive.style.animationName = "nKey";
    } else {
        imgLive.style.animationName = "myKey";
    }
}