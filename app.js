// get all buttons
const pauseBtn = document.querySelector(".pause");
const playBtn = document.querySelector(".play");
const reverseBtn = document.querySelector(".reverse");
const speedUpBtn = document.querySelector(".speedup");
const speedDownBtn = document.querySelector(".speeddown");

// get state div and put state dynamically
const state = document.querySelector(".state");

const bird = document.querySelector(".bird");

var birdKeyframes = [
    { transform: 'translateX(0vw)' },
    { transform: 'translateX(100vw)' },
];
var birdAnimation = bird.animate(birdKeyframes, {
    duration: 14000,
    iterations :Infinity
})

pauseBtn.onclick = () => {
    birdAnimation.pause();
    cloudAnimation.pause();
}
playBtn.onclick = () => {
    birdAnimation.play();
    cloudAnimation.play();
}
reverseBtn.onclick = () => {
    birdAnimation.reverse();
    cloudAnimation.reverse();
}
speedUpBtn.onclick = () => {
    birdAnimation.playbackRate *= 2;
    cloudAnimation.playbackRate *= 2;
}
speedDownBtn.onclick = () => {
    birdAnimation.playbackRate *= .5;
    cloudAnimation.playbackRate *= .5;
}


const cloudDiv = document.querySelector(".cloud-div");

var cloudKeyframes = [
    // { transform: 'translateX(75vw)' },
    // { transform: 'translateX(-100vw)' },
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' },
];
var cloudAnimation = cloudDiv.animate(cloudKeyframes, {
    duration: 20000,
    iterations :Infinity
})


// var aliceTumbling = [
//     { transform: 'rotate(0) translate3D(-50%, -50%, 0)', color: '#000' },
//     { color: '#431236', offset: 0.3 },
//     { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: '#000' }
//   ];

//   var aliceTiming = {
//     duration: 3000,
//     iterations: Infinity
//   }

//   bird.animate(
//     aliceTumbling,
//     aliceTiming
//   )

state.innerHTML += birdAnimation.playState