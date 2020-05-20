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

let defaultSets = 3;
let defaultTimer = 45;

/**
 * State of current workout routine.
 *
 * @type {{currentExercise: Exercise, currentIndex: number, sets: number, timer: number, pause: boolean}}
 */
const state = {
    currentExercise: Object.assign({}, workout[0]),
    currentIndex: 0,
    pause: false,
    sets: defaultSets,
    timer: defaultTimer,
}

const countdownOneSecond = async (countdownSoundElement) => {
    countdownSoundElement.play();
    await sleepOneSecond();
    countdownSoundElement.pause();
    countdownSoundElement.currentTime = 0;
}

const initializeContainer = (container, state) => {
    const { currentExercise } = state;
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
    container.querySelector("#sets").textContent = "";
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

const setSets = (container) => {
    state.sets = defaultSets;
    if (state.currentExercise.alternate) {
        state.sets++;
    }
    container.querySelector("#sets").textContent = `Sets: ${state.sets}`;
}

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const sleepOneSecond = async () => {
    while (state.pause) {
        await sleep(50);
    }
    await sleep(1000);
}

const startTimer = async (container) => {
    const timer = container.querySelector("#timer");
    const doneSound = container.querySelector("#timerDone");
    const countdown = container.querySelector("#countdown");
    const startSound = container.querySelector("#start");
    state.timer = 3;
    while (state.timer > 0) {
        timer.textContent = `Ready in: ${state.timer}`;
        timer.style.color = "green";
        await countdownOneSecond(countdown);
        state.timer--;
    }
    startSound.play();
    timer.style.color = "black";
    state.timer = defaultTimer;
    while (state.timer >= 1) {
        timer.textContent = `Timer: ${state.timer}`;
        if (state.timer < 5) {
            timer.style.color = "red";
            await countdownOneSecond(countdown);
        } else {
            await sleepOneSecond();
        }
        state.timer--;
    }

    timer.textContent = "Done!";
    timer.style.color = "green";
    doneSound.play();
    await sleepOneSecond();
    await sleepOneSecond();
    doneSound.pause();
    doneSound.currentTime = 0;
    startSound.pause();
    startSound.currentTime = 0;

    state.sets--;
    container.querySelector("#sets").textContent = `Sets: ${state.sets}`;
    if (!state.currentExercise.alternate || !(state.sets % 2)) {
        await rest(timer);
    }
}

const rest = async (timer) => {
    state.timer = defaultTimer;
    while (state.timer >= 1) {
        timer.textContent = `Resting: ${state.timer}`;
        await sleepOneSecond();
        state.timer--;
    }
}

window.onload = () => {
    const container = document.querySelector("#container");
    const go = container.querySelector("#go");
    const pause = container.querySelector("#pause");
    const skip = container.querySelector("#skip");
    initializeContainer(container, state);
    go.onclick = async () => {
        setSets(container);
        go.disabled = true;
        pause.disabled = skip.disabled = false;
        while (state.sets > 0) {
            await startTimer(container);
        }
        pause.disabled = skip.disabled = true;
        go.disabled = setNextExercise(container);
    }
    pause.onclick = () => {
        if (state.pause) {
            pause.textContent = "Pause";
        } else {
            pause.textContent = "Resume";
        }
        state.pause = !state.pause;
    }
    skip.onclick = () => {
        state.timer = 1;
    }

    container.querySelector("#defaultSet").addEventListener("change", (event) => defaultSets = event.target.value);
    container.querySelector("#defaultTimer").addEventListener("change", (event) => defaultTimer = event.target.value);
}