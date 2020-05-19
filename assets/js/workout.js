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
 * Shuffled 5-length array of exercises.
 * @type {Exercise[]}
 */
const workout = shuffleExercises().slice(0, 5);

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
    if (currentExercise.alternate) {
        currentExercise.sets++;
    }
    container.querySelector("h3").textContent = `${currentExercise.alternate ? "(ALTERNATE) " : ""}Exercise: ${currentExercise.title}`;
    container.querySelector("p").textContent = `How to do it: ${currentExercise.description}`;
    const videoElement = container.querySelector("video");
    videoElement.src = `assets/images/${currentExercise.image}`;
    try {
        videoElement.load();
        videoElement.play();
    } catch (error) {
        console.error(error);
    }
    container.querySelector("#sets").textContent = `Sets: ${currentExercise.sets}`;
    container.querySelector("#timer").textContent = "";
}

/**
 * @param {Element} container
 * @returns {boolean} if workout is done
 */
const setNextExercise = (container) => {
    state.currentIndex++;
    if (state.currentIndex < workout.length) {
        // TODO: If we implement a more complex exercise we'll need to deep clone instead
        state.currentExercise = Object.assign({}, workout[state.currentIndex]);
        initializeContainer(container, state);
        return false;
    } else {
        container.querySelector("#sets").textContent = "End of the workout!";
        container.querySelector("#timer").textContent = "";
        return true;
    }
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const startTimer = async (container) => {
    state.currentExercise.timer = workout[state.currentIndex].timer;
    const timer = container.querySelector("#timer");
    const doneSound = container.querySelector("#timerDone");
    const countdown = container.querySelector("#countdown");
    const startSound = container.querySelector("#start");
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
    if (!state.currentExercise.alternate || !(state.currentExercise.sets % 2)) {
        await rest(timer);
    }
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
    initializeContainer(container, state);
    go.onclick = async () => {
        go.disabled = true;
        while (state.currentExercise.sets > 0) {
            await startTimer(container);
        }
        go.disabled = setNextExercise(container);
    }
}