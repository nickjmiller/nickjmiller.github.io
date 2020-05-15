/**
 * Exercise Schema
 * 
 * @typedef {{
 *      image: string,
 *      sets: number,
 *      timer: number,
 *      description: string,
 *      title: string,
 *  }} Exercise
 */

/**
 * Local datastore of workouts
 * @type {Exercise[]}
 */
const EXERCISES = [
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

/**
 * Shuffled N-length array of exercises.
 * @type {Exercise[]}
 */
const workout = [...EXERCISES]

/**
 * State of current workout routine.
 *
 * @type {{currentExercise: Exercise, currentIndex: number}}
 */
const state = {
    currentExercise: Object.assign({}, workout[0]),
    currentIndex: 0,
}

const countdownOneSecond = async (countdownSoundElement) => {
    countdownSoundElement.play();
    await sleep(1000);
    countdownSoundElement.pause();
    countdownSoundElement.currentTime = 0;
}

const initializeContainer = (container, state) => {
    const { currentExercise } = state;
    container.querySelector("h3").textContent = `Exercise: ${currentExercise.title}`;
    container.querySelector("p").textContent = `How to do it: ${currentExercise.description}`;
    container.querySelector("img").src = `assets/images/${currentExercise.image}`;
    container.querySelector("#sets").textContent = `Sets: ${currentExercise.sets}`;
    container.querySelector("#timer").textContent = "";
}

const nextClick = (container, go, next) => {
    next.disabled = true;
    const doneSound = container.querySelector("#timerDone");
    doneSound.pause();
    doneSound.currentTime = 0;
    state.currentExercise.sets--;
    state.currentExercise.timer = workout[state.currentIndex].timer;
    container.querySelector("#sets").textContent = `Sets: ${state.currentExercise.sets}`;
    if (state.currentExercise.sets < 1) {
        state.currentIndex++;
        if (state.currentIndex < workout.length) {
            // TODO: If we implement a more complex exercise we'll need to deep clone instead
            state.currentExercise = Object.assign({}, workout[state.currentIndex]);
            initializeContainer(container, state);
        } else {
            container.querySelector("#sets").textContent = "End of the workout!";
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

const startTimer = async (container, go, next) => {
    const timer = container.querySelector("#timer");
    const doneSound = container.querySelector("#timerDone");
    const countdown = container.querySelector("#countdown");
    go.disabled = true;
    let start = 3;
    while (start > 0) {
        timer.textContent = `Ready in: ${start}`;
        timer.style.color = "green";
        await countdownOneSecond(countdown);
        start--;
    }
    timer.style.color = "black";
    while (state.currentExercise.timer >= 1) {
        timer.textContent = `Timer: ${state.currentExercise.timer}`;
        if (state.currentExercise.timer < 5) {
            timer.style.color = "red";
            await countdownOneSecond(countdown);
        } else {
            await sleep(1000);
        }
        state.currentExercise.timer--;
    }
    timer.textContent = "Done!";
    timer.style.color = "green";
    doneSound.play();
    next.disabled = false;
}

window.onload = () => {
    const container = document.querySelector("#container");
    const go = container.querySelector("#go");
    const next = container.querySelector("#next");
    initializeContainer(container, state);
    go.onclick = () => startTimer(container, go, next);
    next.onclick = () => nextClick(container, go, next);
}