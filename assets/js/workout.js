import EXERCISES from "./exercises.js"

/**
 * @typedef {import("./exercises").Exercise} Exercise
 */

const shuffleExercises = () => {
    const array = [...EXERCISES]
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

/**
 * Shuffled 6-length array of exercises.
 * @type {Exercise[]}
 */
const workout = shuffleExercises().slice(0, 6);

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

const getNextExercise = (container, go) => {
    state.currentIndex++;
    if (state.currentIndex < workout.length) {
        // TODO: If we implement a more complex exercise we'll need to deep clone instead
        state.currentExercise = Object.assign({}, workout[state.currentIndex]);
        initializeContainer(container, state);
    } else {
        container.querySelector("#sets").textContent = "End of the workout!";
        go.disabled = true;
        return;
    }
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const startTimer = async (container, go) => {
    state.currentExercise.timer = workout[state.currentIndex].timer;
    const timer = container.querySelector("#timer");
    const doneSound = container.querySelector("#timerDone");
    const countdown = container.querySelector("#countdown");
    const startSound = container.querySelector("#start");
    go.disabled = true;
    let start = 3;
    while (start > 0) {
        timer.textContent = `Ready in: ${start}`;
        timer.style.color = "green";
        await countdownOneSecond(countdown);
        start--;
    }
    startSound.play();
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
    await sleep(2000);
    doneSound.pause();
    doneSound.currentTime = 0;
    startSound.pause();
    startSound.currentTime = 0;

    state.currentExercise.sets--;
    container.querySelector("#sets").textContent = `Sets: ${state.currentExercise.sets}`;
    await rest(timer);
}

const rest = async (timer) => {
    let rest = workout[state.currentIndex].timer;
    while (rest >= 1) {
        timer.textContent = `Resting: ${rest}`;
        await sleep(1000);
        rest--;
    }
}

window.onload = () => {
    const container = document.querySelector("#container");
    const go = container.querySelector("#go");
    const next = container.querySelector("#next");
    initializeContainer(container, state);
    go.onclick = async () => {
        go.disabled = true;
        while (state.currentExercise.sets > 0) {
            await startTimer(container, go);
        }
        getNextExercise(container, go);
        go.disabled = false;
    }
}