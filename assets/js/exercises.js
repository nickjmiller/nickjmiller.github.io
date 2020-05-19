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
    *      alternate: boolean,
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
        image: "balance mini squats.webm",
        sets: 3,
        timer: 45,
        description: "During this movement, drive the non-balancing leg behind and to the right, return to starting position. Repeat going behind and to the left. The intent is to reach as far as possible in both directions by reaching outside of your base of support while still able to maintain balance.",
        title: "Balance mini squats",
        muscles: ["quads", "glutes", "balance"],
        alternate: false,
    },
    {
        image: "box squats.webm",
        sets: 3,
        timer: 45,
        description: "During this movement, drive hips back towards object approximately 18 inches off ground (standard height of chair) and tap bottom without completely sitting. Return to standing position.",
        title: "Box squats",
        muscles: ["quads", "glutes"],
        alternate: false,
    },
    {
        image: "forward lung.webm",
        sets: 3,
        timer: 45,
        description: "Step forward far enough that your shin bone is perpendicular to the floor. return to starting position and repeat movement for opposite side. Focus on keeping an up right posture while performing this movement. This will keep the focus on your quads. Bend more at the waist if you wish to put more emphasis on glutes during exercise.",
        title: "Forward lunge",
        muscles: ["quads", "glutes"],
        alternate: false,
    },
    {
        image: "goblet squat.webm",
        sets: 3,
        timer: 45,
        description: "Stand with feet slightly wider than a normal squat position. Hold weight close to chest (harder) or hanging between legs (easier). while maintaining a neutral spine, lower weight towards ground while maintaining upright posture. return to starting position.",
        title: "Goblet squat",
        muscles: ["quads", "glutes"],
        alternate: false,
    },
    {
        image: "Hip hikes.webm",
        sets: 3,
        timer: 45,
        description: "While standing with one foot on object approximately 3-4 inches in height, allow other side to dangle off. While maintain knees in straight position lower hanging side towards ground and once lowered as far as possible without bending knees, lift hip as high as possible. Repeat on opposite side. (Key is for movement to come from hips and not from knee bending)",
        title: "Hip hikes",
        muscles: ["quads", "glutes"],
        alternate: true,
    },
    {
        image: "lateral squat.webm",
        sets: 3,
        timer: 45,
        description: "While facing forward, take a large step to side. Bend knee as far as balance/strength will allow and push off foot to return to starting position. repeat for opposite side.",
        title: "Lateral squats",
        muscles: ["glutes"],
        alternate: false,
    },
    {
        image: "olympic squat.webm",
        sets: 3,
        timer: 45,
        description: "Obtain a bar (a broom stick handle). Place hands far enough out on the bar such that the bar rest at approximately the crux of the hips while standing straight. From here raise bar over head, inline with the base of your skull while standing straight. Once in this position squat down as far as possible while maintaining bar in this position. Only squat to the depth that you can maintain the bar in idle position.",
        title: "Olympic squats",
        muscles: ["glutes"],
        alternate: false,
    },
    {
        image: "single leg SLDL.webm",
        sets: 3,
        timer: 45,
        description: "While standing on one leg, keep body rigid from head to floating foot. From here, lower chest towards ground while maintaining neutral spine. Go only as far as hamstring flexibility will allow and also while maintaining good form.",
        title: "Single leg romanian deadlift (SLRDL) or single leg deadlift (SLDL)",
        muscles: ["balance", "hamstrings", "glutes"],
        alternate: true,
    },
    {
        image: "SLDL.webm",
        sets: 3,
        timer: 45,
        description: "With feet placed directly under hips, maintain a neutral spine while lowering trunk towards ground, soft bend in the knees is preferred during this movement (Keep knees just shy of being completely locked out). Focus on using hamstring and glutes to return to upright position once maximal bend from hips is achieved.",
        title: "Straight legged deadlift (SLDL) or Romanian deadlift",
        muscles: ["hamstrings", "glutes"],
        alternate: false,
    },
    {
        image: "split squat.webm",
        sets: 3,
        timer: 45,
        description: "Get into a lung position with posterior foot placed on object approximately 18 inches off ground (about the height of a average chair). maintain front shin perpendicular from floor. Focus on keeping upright posture while lowering your back knee towards floor without touching it on ground. Return to starting position and repeat on other side.",
        title: "Split squat or bulgarian split squat",
        muscles: ["glutes"],
        alternate: true,
    },
    {
        image: "squaTS.webm",
        sets: 3,
        timer: 45,
        description: "With feet about shoulder width apart, focus on driving hips back and towards the ground while maintaining upright posture. Think about driving knees out (away from each other) while going down and coming back up.",
        title: "Squats",
        muscles: ["glutes", "quads"],
        alternate: false,
    },
    {
        image: "straight bar squat.webm",
        sets: 3,
        timer: 45,
        description: "Using a bar (broom handle or PVC pipe) align it such that it touches the back of your head, your upper back, and your tail bone. stand in squat position so that all three points of contact are maintained. Lower body into a squat while ensuring integrity of spine via 3 points of contact with bar. Only squat as deep as body will allow, meaning if loss of one of three points, stop and do not squat deeper under alignment is regained.",
        title: "Straight bar squats",
        muscles: ["glutes", "quads"],
        alternate: false,
    },
    {
        image: "ab roller.webm",
        sets: 3,
        timer: 45,
        description: "With knees protected by soft surface (pillow or pad) roll on ab roller only as far as you can that will allow for safe return to starting position.",
        title: "Ab roller",
        muscles: ["abs"],
        alternate: false,
    },
    {
        image: "contralateral extnesion.webm",
        sets: 3,
        timer: 45,
        description: "While laying on back, bring hands and feet into the air. Focus on driving your low back into the ground such that there is no space between low back and ground. Once in this position, maintain focus on low back while extending opposite hand and leg. only extend as far as possible without arching low back. Repeat for both sides.",
        title: "Supine contralateral extensions",
        muscles: ["abs"],
        alternate: false,
    },
    {
        image: "leg raises.webm",
        sets: 3,
        timer: 45,
        description: "While laying on back, grab object like closed door or couch. Focus on driving your low back into the ground such that there is no space between low back and ground. Once in this position, Raise legs into the air without arching low back. Only extend as far as possible without arching low back. Repeat for both sides.",
        title: "Leg raises",
        muscles: ["abs"],
        alternate: false,
    },
    {
        image: "planks.webm",
        sets: 3,
        timer: 45,
        description: "Get onto stomach and place elbows underneath shoulders, come up onto toes (knees if toes are too hard) and straighten body. Think about tucking hips in to activate core while in this position. If to easy bring elbows forward underneath forehand and maintain position.",
        title: "Planks",
        muscles: ["abs"],
        alternate: false,
    },
    {
        image: "quadreped contralateral extensions.webm",
        sets: 3,
        timer: 45,
        description: "Get onto hands and knees. Drive hands into ground pushing away through shoulders. maintain this position throughout movement. Lift opposite hand and leg, extending both at the same time. Maintain neutral spine through movement, If low back arches, only extend as far as body will allow in order to maintain neutral spine.",
        title: "Quadruped contralateral extensions",
        muscles: ["abs", "balance"],
        alternate: false,
    },
    {
        image: "shoulder stability roll.webm",
        sets: 3,
        timer: 45,
        description: "While laying on your back hold light weight straight up towards ceiling. Lift the same side knee into the hair holding at a 90 degree position. Roll towards side that does not have hand in the air. Roll while maintain shoulders and hips in same position. While rolling. Keep raised hand in same position.",
        title: "Shoulder stability roll",
        muscles: ["shoulder", "stretch"],
        alternate: false,
    },
    {
        image: "supermans.webm",
        sets: 3,
        timer: 45,
        description: "Lie face down on ground with hands placed above head. Rotate thumbs so that are facing the ceiling. Lift chest, arms and legs off the ground. Do not bend knees, but instead keep legs straight as you lift.",
        title: "Supermans",
        muscles: ["back"],
        alternate: false,
    },
    {
        image: "prone contralateral extensions.webm",
        sets: 3,
        timer: 45,
        description: "While laying on stomach and arms above head, rotate thumbs up so that are pointed towards the ceiling. Lift opposite hand and leg in 1-2 second lifts. repeat on opposite side.",
        title: "Prone Contralateral Extensions",
        muscles: ["back"],
        alternate: false,
    },
    {
        image: "y extensions.webm",
        sets: 3,
        timer: 45,
        description: "While laying on stomach and arms above head, rotate thumbs up so that are pointed towards the ceiling. Lift one side as high as possible or until your hand is pointed towards ceiling. rotate through spine and return to starting position.",
        title: "Y extensions",
        muscles: ["back"],
        alternate: false,
    },
    {
        image: "body weight shoulder press.webm",
        sets: 3,
        timer: 45,
        description: "With a sturdy surface (chair) pull body away to allow room to lower hips towards floor by bending elbows. Keep elbows in throughout movement. only go as deep as shoulders will allow as movement places stress on the front aspect of shoulders.",
        title: "Body weight dips",
        muscles: ["chest", "triceps"],
        alternate: false,
    },
    {
        image: "Dumbbell curls.webm",
        sets: 3,
        timer: 45,
        description: "While standing, raise weights from side to chest while rotating hand palm up. return to starting position by straightening elbow and rotating hand back towards pockets. Alternative is to perform hammer curl which typically involves larger weight and curling like as though it was a hammer.",
        title: "Dumbbell curls",
        muscles: ["biceps"],
        alternate: false,
    },
    {
        image: "Dynamic pushups.webm",
        sets: 3,
        timer: 45,
        description: "Do a push up after each of the following positions: 1) place hands normally, place hands wide, one hand forward and one hand back, repeat but for opposite side, hands by forehead lowing down to elbows, hands together making a diamond shape between each hands pointer finger and thumbs.",
        title: "Dynamic push ups",
        muscles: ["chest"],
        alternate: false,
    },
    {
        image: "front delts.webm",
        sets: 3,
        timer: 45,
        description: "Standing with weights in hands raise weights in front until level with shoulder and return to starting position.",
        title: "Front delt raise",
        muscles: ["shoulder"],
        alternate: false,
    },
    {
        image: "Hindu push up.webm",
        sets: 3,
        timer: 45,
        description: "Starting in a downward dog position, lower nose towards floor until as though attempting to slide underneath an object. Return to start position and repeat.",
        title: "Hindu pushups",
        muscles: ["chest", "shoulder"],
        alternate: false,
    },
    {
        image: "inclinded pusheps.webm",
        sets: 3,
        timer: 45,
        description: "Place feet higher than hands and perform a standard push up.",
        title: "Incline pushups",
        muscles: ["chest"],
        alternate: false,
    },
    {
        image: "lat raises.webm",
        sets: 3,
        timer: 45,
        description: "Holding weights at side, bring them up until arms are level with shoulders. focus on driving elbows high in order to activity deltoid muscle.",
        title: "Lateral raises",
        muscles: ["shoulder"],
        alternate: false,
    },
    {
        image: "Push ups.webm",
        sets: 3,
        timer: 45,
        description: "Place hands at or slightly wider than shoulders. lower chest towards ground while maintaining straight body alignment. Push self back to starting position. Be sure to full extend arms before attempting next rep.",
        title: "Pushups",
        muscles: ["chest"],
        alternate: false,
    },
    {
        image: "Shoulder press DB.webm",
        sets: 3,
        timer: 45,
        description: "Place feet on object approximately 18 inches off ground (standard chair height). From here, lift hips as high into the air as possible provided arms can support position. If position is difficult maintain position for duration of exercise, if it is easy lower head towards ground WITHOUT touching and raise back to start position.",
        title: "Body weight shoulder press",
        muscles: ["shoulder"],
        alternate: false,
    },
    {
        image: "single leg shoulder press.webm",
        sets: 3,
        timer: 45,
        description: "While standing on one leg, press weight on same side into the air. be sure to maintain a level pelvis while pressing.",
        title: "Single leg shoulder press",
        muscles: ["shoulder", "glutes", "balance"],
        alternate: true,
    },
    {
        image: "triceps extension.webm",
        sets: 3,
        timer: 45,
        description: "Bend at waist until trunk is parallel with floor. If needed, place opposite hand on addition surface for stabilization. While keeping the working arms elbow stabilized at side, extend weight against gravity.",
        title: "Tricep extension",
        muscles: ["triceps"],
        alternate: false,
    },
    {
        image: "uneven push up.webm",
        sets: 3,
        timer: 45,
        description: "Perform a standard push up with object 4-8 inches in height under one hand. repeat push ups for opposite side.",
        title: "Uneven push up",
        muscles: ["triceps"],
        alternate: false,
    },
];

export default EXERCISES;