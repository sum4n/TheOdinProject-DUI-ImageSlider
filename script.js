
const imgList = ['bird1.jpg', 'bird2.jpg', 'bird3.jpg',
                 'bird4.jpg', 'bird5.jpg'];

const imgListLength = imgList.length;


function showNextImage() {
    
    const imgLive = document.getElementById("carousel");
    const imgLiveSrc = imgLive.getAttribute("src").slice(9);

    for(let i = 0; i < imgListLength - 1; i++) {
        if (imgList[i] == imgLiveSrc) {
            imgLive.src = `./images/${imgList[i+1]}`;
        }
    }
}

function showPreviousImage() {
    
    const imgLive = document.getElementById("carousel");
    const imgLiveSrc = imgLive.getAttribute("src").slice(9);

    for (let i = imgListLength - 1; i > 0; i--) {
        if (imgList[i] == imgLiveSrc) {
            imgLive.src = `./images/${imgList[i-1]}`;
            console.log(imgLive.src);
        }
    }
}