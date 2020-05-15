/**
 * Local datastore of workouts
 * @type {{
 *      image: string,
 *      sets: number,
 *      timer: number,
 *      description: string,
 *      title: string,
 *  }[]}
 */
const workouts = [
    {
        image: "sp.gif",
        sets: 3,
        timer: 10,
        description: "Here's how it works",
        title: "Hello"
    },
    {
        image: "",
        sets: 2,
        timer: 60,
        description: "Flex your abs",
        title: "Bench or whatever"
    },
];

const goClick = (button, container, next) => {
    startTimer(button, container, next);
};

const initializeContainer = (container, workout) => {
    container.querySelector("h3").textContent = `Exercise: ${workout.title}`;
    container.querySelector("p").textContent = `How to do it: ${workout.description}`;
    container.querySelector("img").src = `assets/images/${workout.image}`;
    container.querySelector("#sets").textContent = `Sets: ${currentWorkout.sets}`;
    container.querySelector("#timer").textContent = "";
}

const nextClick = (container, go, next) => {
    next.disabled = true;
    const doneSound = container.querySelector("#timerDone");
    doneSound.pause();
    doneSound.currentTime = 0;
    currentWorkout.sets--;
    currentWorkout.timer = workouts[currentIndex].timer;
    container.querySelector("#sets").textContent = `Sets: ${currentWorkout.sets}`;
    if (currentWorkout.sets < 1) {
        currentIndex++;
        if (currentIndex < workouts.length) {
            currentWorkout = Object.assign({}, workouts[currentIndex]);
            initializeContainer(container, currentWorkout);
        } else {
            go.disabled = true;
            next.disabled = true;
            return;
        }
    }
    go.disabled = false;
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const startTimer = async (go, container, next) => {
    const timer = container.querySelector("#timer");
    const doneSound = container.querySelector("#timerDone");
    const countdown = container.querySelector("#countdown");
    go.disabled = true;
    let start = 3;
    while (start > 0) {
        timer.textContent = `Ready in: ${start}`;
        timer.style.color = "green";
        countdown.play();
        await sleep(1000);
        start--;
    }
    timer.style.color = "black";
    while (currentWorkout.timer >= 1) {
        timer.textContent = `Timer: ${currentWorkout.timer}`;
        if (currentWorkout.timer < 5) {
            countdown.play();
            timer.style.color = "red";
        }
        await sleep(1000);
        currentWorkout.timer--;
    }
    timer.textContent = "Done!";
    timer.style.color = "green";
    doneSound.play();
    next.disabled = false;
}

let currentWorkout = Object.assign({}, workouts[0]);
let currentIndex = 0;

window.onload = () => {
    const container = document.querySelector("#container");
    const go = container.querySelector("#go");
    const next = container.querySelector("#next");
    initializeContainer(container, currentWorkout);
    go.onclick = () => goClick(go, container, next);
    next.onclick = () => nextClick(container, go, next);
}