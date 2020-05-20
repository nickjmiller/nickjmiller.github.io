---
layout: page
title:  "Workout"
---
<script type="module" src="{{ base.url | prepend: site.url }}/assets/js/workout.js"></script>

<div id="container">
    <audio id="timerDone">
        <source src="assets/audio/timerDone.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    <audio id="countdown">
        <source src="assets/audio/countdown.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    <audio id="start">
        <source src="assets/audio/start.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    <h3></h3>
    <p></p>
    <label for="defaultSet">Default Sets (+1 for unilateral, applies next exercise):</label>
    <input type="number" id="defaultSet" name="defaultSet" value="3"
       min="1" max="10">
    <label for="defaultTimer">Default Timer:</label>
    <input type="number" id="defaultTimer" name="defaultTimer" value="45"
       min="1" max="1000">
    <br>
    <br>
    <video autoplay loop defaultMuted muted playsinline style="max-width:90vw;display:block;margin: 0 auto;">
    </video>
    <br>
    <span id="timer"></span>
    <span id="sets"></span>
    <div>
        <button id="go">Let's Go!</button>
        <button id="pause" disabled>Pause</button>
        <button id="skip" disabled>Skip Once</button>
    </div>
</div>