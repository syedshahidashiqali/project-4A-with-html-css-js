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
    backWheelAnimation.pause();
    frontWheelAnimation.pause();
    carAnimation.pause();
    cityAnimation.pause();
    highwayAnimation.pause();
    state.innerHTML = `Animation State: <b>${birdAnimation.playState}</b>`
}
playBtn.onclick = () => {
    birdAnimation.play();
    cloudAnimation.play();
    backWheelAnimation.play();
    frontWheelAnimation.play();
    carAnimation.play();
    cityAnimation.play();
    highwayAnimation.play();
    state.innerHTML = `Animation State: <b>${birdAnimation.playState}</b>`
}
reverseBtn.onclick = () => {
    birdAnimation.reverse();
    cloudAnimation.reverse();
    backWheelAnimation.reverse();
    frontWheelAnimation.reverse();
    carAnimation.reverse();
    cityAnimation.reverse();
    highwayAnimation.reverse();
}
speedUpBtn.onclick = () => {
    birdAnimation.playbackRate *= 2;
    cloudAnimation.playbackRate *= 2;
    backWheelAnimation.playbackRate *= 2;
    frontWheelAnimation.playbackRate *= 2;
    carAnimation.playbackRate *= 2;
    cityAnimation.playbackRate *= 2;
    highwayAnimation.playbackRate *= 2;
}
speedDownBtn.onclick = () => {
    birdAnimation.playbackRate *= .5;
    cloudAnimation.playbackRate *= .5;
    backWheelAnimation.playbackRate *= .5;
    frontWheelAnimation.playbackRate *= .5;
    carAnimation.playbackRate *= .5;
    cityAnimation.playbackRate *= .5;
    highwayAnimation.playbackRate *= .5;
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

// Wheels Animation
const frontWheel = document.querySelector(".front-wheel");
const backWheel = document.querySelector(".back-wheel");

var wheelsKeyFrames = [
    {transform: 'rotate(0deg)'},
    {transform: 'rotate(3600deg)'},
]
var backWheelAnimation = backWheel.animate(wheelsKeyFrames, {
    duration: 20000,
    iterations: Infinity
})
var frontWheelAnimation = frontWheel.animate(wheelsKeyFrames, {
    duration: 20000,
    iterations: Infinity
})


// Car Animation
const car = document.querySelector(".car");

carKeyFrame = [
    {transform: "translateY(0px)"},
    {transform: "translateY(2px)"},
]

var carAnimation = car.animate(carKeyFrame, {
    duration:2000,
    iterations:Infinity,
    direction: "alternate"
})

const city = document.querySelector(".city");
const highway = document.querySelector(".highway");

var cityKeyFrame = [
    {transform: 'translateX(0%)'},
    {transform: 'translateX(-20%)'},
]


var cityAnimation = city.animate(cityKeyFrame, {
    duration:20000,
    iterations:Infinity,
})

var highwayKeyFrame = [
    {transform: 'translateX(0%)'},
    {transform: 'translateX(-10%)'},
    {transform: 'translateX(-20%)'},
]

var highwayAnimation = highway.animate(highwayKeyFrame, {
    duration:20000,
    iterations:Infinity,
})
state.innerHTML += `<b>${birdAnimation.playState}</b>`;
