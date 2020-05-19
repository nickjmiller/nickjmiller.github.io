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
    <span id="timer"></span>
    <span id="sets"></span>
    <video autoplay loop muted playsinline controls>
        <source id="video" src="" type="video/webm">
    </video>
    <button id="go">Let's Go!</button>
</div>