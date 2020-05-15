/**
 * Exercise Schema
 * 
 * @typedef {{
 *      image: string,
 *      sets: number,
 *      timer: number,
 *      description: string,
 *      title: string,
 *      muscles: muscle[],
 *  }} Exercise
 * 
 * @typedef {"abs" | "hamstrings" | "glutes" | "quads" | "balance" | "shoulder" | "stretch" | "back" | "chest" | "triceps" | "biceps"} muscle
 */

/**
 * Local datastore of workouts
 * @type {Exercise[]}
 */
const EXERCISES = [
    {
        image: "balance mini squats.gif",
        sets: 3,
        timer: 45,
        description: "During this movement, drive the non-balancing leg behind and to the right, return to starting position. Repeat going behind and to the left. The intent is to reach as far as possible in both directions by reaching outside of your base of support while still able to maintain balance.",
        title: "Balance mini squats",
        muscles: ["quads", "glutes", "balance"]
    },
    {
        image: "box squats.gif",
        sets: 3,
        timer: 45,
        description: "During this movement, drive hips back towards object approximately 18 inches off ground (standard height of chair) and tap bottom without completely sitting. Return to standing position.",
        title: "Box squats",
        muscles: ["quads", "glutes"]
    },
    {
        image: "forward lung.gif",
        sets: 3,
        timer: 45,
        description: "Step forward far enough that your shin bone is perpendicular to the floor. return to starting position and repeat movement for opposite side. Focus on keeping an up right posture while performing this movement. This will keep the focus on your quads. Bend more at the waist if you wish to put more emphasis on glutes during exercise.",
        title: "Forward lunge",
        muscles: ["quads", "glutes"]
    },
    {
        image: "goblet squat.gif",
        sets: 3,
        timer: 45,
        description: "Stand with feet slightly wider than a normal squat position. Hold weight close to chest (harder) or hanging between legs (easier). while maintaining a neutral spine, lower weight towards ground while maintaining upright posture. return to starting position.",
        title: "Goblet squat",
        muscles: ["quads", "glutes"]
    },
    {
        image: "Hip hikes.gif",
        sets: 3,
        timer: 45,
        description: "While standing with one foot on object approximately 3-4 inches in height, allow other side to dangle off. While maintain knees in straight position lower hanging side towards ground and once lowered as far as possible without bending knees, lift hip as high as possible. Repeat on opposite side. (Key is for movement to come from hips and not from knee bending)",
        title: "Hip hikes",
        muscles: ["quads", "glutes"]
    },
    {
        image: "lateral squat.gif",
        sets: 3,
        timer: 45,
        description: "While facing forward, take a large step to side. Bend knee as far as balance/strength will allow and push off foot to return to starting position. repeat for opposite side.",
        title: "Lateral squats",
        muscles: ["glutes"]
    },
    {
        image: "olympic squat.gif",
        sets: 3,
        timer: 45,
        description: "Obtain a bar (a broom stick handle). Place hands far enough out on the bar such that the bar rest at approximately the crux of the hips while standing straight. From here raise bar over head, inline with the base of your skull while standing straight. Once in this position squat down as far as possible while maintaining bar in this position. Only squat to the depth that you can maintain the bar in idle position.",
        title: "Olympic squats",
        muscles: ["glutes"]
    },
    {
        image: "single leg SLDL.gif",
        sets: 3,
        timer: 45,
        description: "While standing on one leg, keep body rigid from head to floating foot. From here, lower chest towards ground while maintaining neutral spine. Go only as far as hamstring flexibility will allow and also while maintaining good form.",
        title: "Single leg romanian deadlift (SLRDL) or single leg deadlift (SLDL)",
        muscles: ["balance", "hamstrings", "glutes"]
    },
    {
        image: "SLDL.gif",
        sets: 3,
        timer: 45,
        description: "With feet placed directly under hips, maintain a neutral spine while lowering trunk towards ground, soft bend in the knees is preferred during this movement (Keep knees just shy of being completely locked out). Focus on using hamstring and glutes to return to upright position once maximal bend from hips is achieved.",
        title: "Straight legged deadlift (SLDL) or Romanian deadlift",
        muscles: ["hamstrings", "glutes"]
    },
    {
        image: "split squat.gif",
        sets: 3,
        timer: 45,
        description: "Get into a lung position with posterior foot placed on object approximately 18 inches off ground (about the height of a average chair). maintain front shin perpendicular from floor. Focus on keeping upright posture while lowering your back knee towards floor without touching it on ground. Return to starting position and repeat on other side.",
        title: "Split squat or bulgarian split squat",
        muscles: ["glutes"]
    },
    {
        image: "squaTS.gif",
        sets: 3,
        timer: 45,
        description: "With feet about shoulder width apart, focus on driving hips back and towards the ground while maintaining upright posture. Think about driving knees out (away from each other) while going down and coming back up.",
        title: "Squats",
        muscles: ["glutes", "quads"]
    },
    {
        image: "straight bar squat.gif",
        sets: 3,
        timer: 45,
        description: "Using a bar (broom handle or PVC pipe) align it such that it touches the back of your head, your upper back, and your tail bone. stand in squat position so that all three points of contact are maintained. Lower body into a squat while ensuring integrity of spine via 3 points of contact with bar. Only squat as deep as body will allow, meaning if loss of one of three points, stop and do not squat deeper under alignment is regained.",
        title: "Straight bar squats",
        muscles: ["glutes", "quads"]
    },
    {
        image: "ab roller.gif",
        sets: 3,
        timer: 45,
        description: "With knees protected by soft surface (pillow or pad) roll on ab roller only as far as you can that will allow for safe return to starting position.",
        title: "Ab roller",
        muscles: ["abs"]
    },
    {
        image: "contralateral extnesion.gif",
        sets: 3,
        timer: 45,
        description: "While laying on back, bring hands and feet into the air. Focus on driving your low back into the ground such that there is no space between low back and ground. Once in this position, maintain focus on low back while extending opposite hand and leg. only extend as far as possible without arching low back. Repeat for both sides.",
        title: "Supine contralateral extensions",
        muscles: ["abs"]
    },
    {
        image: "leg raises.gif",
        sets: 3,
        timer: 45,
        description: "While laying on back, grab object like closed door or couch. Focus on driving your low back into the ground such that there is no space between low back and ground. Once in this position, Raise legs into the air without arching low back. Only extend as far as possible without arching low back. Repeat for both sides.",
        title: "Supine contralateral extensions",
        muscles: ["abs"]
    },
    {
        image: "planks.gif",
        sets: 3,
        timer: 45,
        description: "Get onto stomach and place elbows underneath shoulders, come up onto toes (knees if toes are too hard) and straighten body. Think about tucking hips in to activate core while in this position. If to easy bring elbows forward underneath forehand and maintain position.",
        title: "Planks",
        muscles: ["abs"]
    },
    {
        image: "quadruped contralateral extensions.gif",
        sets: 3,
        timer: 45,
        description: "Get onto hands and knees. Drive hands into ground pushing away through shoulders. maintain this position throughout movement. Lift opposite hand and leg, extending both at the same time. Maintain neutral spine through movement, If low back arches, only extend as far as body will allow in order to maintain neutral spine.",
        title: "Quadruped contralateral extensions",
        muscles: ["abs", "balance"]
    },
    {
        image: "shoulder stability roll.gif",
        sets: 3,
        timer: 45,
        description: "While laying on your back hold light weight straight up towards ceiling. Lift the same side knee into the hair holding at a 90 degree position. Roll towards side that does not have hand in the air. Roll while maintain shoulders and hips in same position. While rolling. Keep raised hand in same position.",
        title: "Shoulder stability roll",
        muscles: ["shoulder", "stretch"]
    },
    {
        image: "supermans.gif",
        sets: 3,
        timer: 45,
        description: "Lie face down on ground with hands placed above head. Rotate thumbs so that are facing the ceiling. Lift chest, arms and legs off the ground. Do not bend knees, but instead keep legs straight as you lift.",
        title: "Supermans",
        muscles: ["back"]
    },
    {
        image: "prone contralateral extensions.gif",
        sets: 3,
        timer: 45,
        description: "While laying on stomach and arms above head, rotate thumbs up so that are pointed towards the ceiling. Lift opposite hand and leg in 1-2 second lifts. repeat on opposite side.",
        title: "Prone Contralateral Extensions",
        muscles: ["back"]
    },
    {
        image: "y extensions.gif",
        sets: 3,
        timer: 45,
        description: "While laying on stomach and arms above head, rotate thumbs up so that are pointed towards the ceiling. Lift one side as high as possible or until your hand is pointed towards ceiling. rotate through spine and return to starting position.",
        title: "Y extensions",
        muscles: ["back"]
    },
    {
        image: "body weight shoulder press.gif",
        sets: 3,
        timer: 45,
        description: "With a sturdy surface (chair) pull body away to allow room to lower hips towards floor by bending elbows. Keep elbows in throughout movement. only go as deep as shoulders will allow as movement places stress on the front aspect of shoulders.",
        title: "Body weight dips",
        muscles: ["chest", "triceps"]
    },
    {
        image: "Dumbbell curls.gif",
        sets: 3,
        timer: 45,
        description: "While standing, raise weights from side to chest while rotating hand palm up. return to starting position by straightening elbow and rotating hand back towards pockets. Alternative is to perform hammer curl which typically involves larger weight and curling like as though it was a hammer.",
        title: "Dumbbell curls",
        muscles: ["biceps"]
    },
    {
        image: "Dynamic pushups.gif",
        sets: 3,
        timer: 45,
        description: "Do a push up after each of the following positions: 1) place hands normally, place hands wide, one hand forward and one hand back, repeat but for opposite side, hands by forehead lowing down to elbows, hands together making a diamond shape between each hands pointer finger and thumbs.",
        title: "Dynamic push ups",
        muscles: ["chest"]
    },
    {
        image: "front delts.gif",
        sets: 3,
        timer: 45,
        description: "Standing with weights in hands raise weights in front until level with shoulder and return to starting position.",
        title: "Front delt raise",
        muscles: ["shoulder"]
    },
    {
        image: "Hindu push up.gif",
        sets: 3,
        timer: 45,
        description: "Starting in a downward dog position, lower nose towards floor until as though attempting to slide underneath an object. Return to start position and repeat.",
        title: "Hindu pushups",
        muscles: ["chest", "shoulder"]
    },
    {
        image: "inclinded pusheps.gif",
        sets: 3,
        timer: 45,
        description: "Place feet higher than hands and perform a standard push up.",
        title: "Incline pushups",
        muscles: ["chest"]
    },
    {
        image: "lat raises.gif",
        sets: 3,
        timer: 45,
        description: "Holding weights at side, bring them up until arms are level with shoulders. focus on driving elbows high in order to activity deltoid muscle.",
        title: "Lateral raises",
        muscles: ["shoulder"]
    },
    {
        image: "Push ups.gif",
        sets: 3,
        timer: 45,
        description: "Place hands at or slightly wider than shoulders. lower chest towards ground while maintaining straight body alignment. Push self back to starting position. Be sure to full extend arms before attempting next rep.",
        title: "Pushups",
        muscles: ["chest"]
    },
    {
        image: "Shoulder press DB.gif",
        sets: 3,
        timer: 45,
        description: "Place feet on object approximately 18 inches off ground (standard chair height). From here, lift hips as high into the air as possible provided arms can support position. If position is difficult maintain position for duration of exercise, if it is easy lower head towards ground WITHOUT touching and raise back to start position.",
        title: "Body weight shoulder press",
        muscles: ["shoulder"]
    },
    {
        image: "single leg shoulder press.gif",
        sets: 3,
        timer: 45,
        description: "While standing on one leg, press weight on same side into the air. be sure to maintain a level pelvis while pressing.",
        title: "Single leg shoulder press",
        muscles: ["shoulder", "glutes", "balance"]
    },
    {
        image: "triceps extension.gif",
        sets: 3,
        timer: 45,
        description: "Bend at waist until trunk is parallel with floor. If needed, place opposite hand on addition surface for stabilization. While keeping the working arms elbow stabilized at side, extend weight against gravity.",
        title: "Tricep extension",
        muscles: ["triceps"]
    },
    {
        image: "uneven push up.gif",
        sets: 3,
        timer: 45,
        description: "Perform a standard push up with object 4-8 inches in height under one hand. repeat push ups for opposite side.",
        title: "Uneven push up",
        muscles: ["triceps"]
    },
];

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