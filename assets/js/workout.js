/**
 * Local datastore of workouts
 * @type {[
 *  {
 *      image: string,
 *      sets: number,
 *      timer: number,
 *      description: string,
 *      title: string,
 *  }
 * ]}
 */
const workouts = [
    {
        image: "",
        sets: 3,
        timer: 30,
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

const goClick = (button, container, timer, next) => {
    container.querySelector("#timer").textContent = `Timer: ${timer}`;
    button.disabled = true;
    next.disabled = false;
};

const initializeContainer = (container, workout) => {
    container.querySelector("h3").textContent = `Exercise: ${workout.title}`;
    container.querySelector("p").textContent = `How to do it: ${workout.description}`;
    container.querySelector("#sets").textContent = `Sets: ${currentWorkout.sets}`;
    container.querySelector("#timer").textContent = "";
}

const nextClick = (container, go, next) => {
    next.disabled = true;
    currentWorkout.sets--;
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

let currentWorkout = Object.assign({}, workouts[0]);
let currentIndex = 0;

window.onload = () => {
    const container = document.querySelector("#container");
    const go = container.querySelector("#go");
    const next = container.querySelector("#next");
    initializeContainer(container, currentWorkout);
    go.onclick = () => goClick(go, container, currentWorkout.timer, next);
    next.onclick = () => nextClick(container, go, next);
}