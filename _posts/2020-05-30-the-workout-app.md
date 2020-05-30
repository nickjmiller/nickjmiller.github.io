---
layout: post
title:  "The Workout App"
date:   2020-05-30 12:00:00 -0600
categories: news front-end
---

After talking about jQuery sucking [in my last post]({% post_url 2020-05-14-first %}), I decided to make a fully functional "app" that is actually useful, using nothing but vanilla javascript and HTML5. You can check it out [here](/workout).

## The App
It's a random workout generator, when the page loads it shuffles a list of exercises and pulls the first 6. There is a loosely defined schema:
{% raw %}
```js
/**
 * Exercise Schema
 * 
 * @typedef {{
 *      image: string,
 *      description: string,
 *      title: string,
 *      muscles: muscle[],
 *      alternate: boolean,
 *      equipment: equipment[],
 *  }} Exercise
 * 
 * @typedef {"bar" | "chair" | "block" | "ab roller" | "weight"} equipment
 * @typedef {"abs" | "hamstrings" | "glutes" | "quads" | "balance" | "shoulder" | "stretch" | "back" | "chest" | "triceps" | "biceps"} muscle
 */
 ```
 {% endraw %}

> ^ The templating engine did not like that, so I had to use [raw](https://rubydoc.info/gems/liquid/Liquid/Raw)

In other words:

attribute | type | purpose
-- | -- | --
image | string/mp4 url| A looping gif of how to perform the exercise, performed by my friend. [Here's his site](themedicalrinse.com)
description/title | string | Information on the exercise
muscles | array of strings | Muscles targeted by the exercise, future work would be to sort by this
equipment | array of strings | Equipment needed for exercise, future work would be to only show exercises that a user has equipment for
alternate | boolean | If an exercise is unilateral, meaning you do one side then switch immediately, used in the set/rest logic

### Workout Flow

Each workout has 6 exercises, when a user clicks go the workout counts down. Each exercise has a specified number of sets, or intervals of working out and resting. Users can pause or skip ahead. Unilateral workouts do not have a rest every other set, and always have an even number of sets.

### Issues

I needed to manage state in this app, but I am using vanilla javascript. I created a global state variable, and stored all the information that I needed to describe the current state.

**State:**

{% raw %}
```js
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
```
{% endraw %}

* **currentExercise**: This object holds the current state of the exercise. We use `Object.assign` to avoid mutating the original object.
* **currentIndex**: This is the current index of the workout, once this reaches the workout length we are done
* **pause**: Pause boolean, blocks the timer if it's true
* **sets**: default sets for the exercise, this sets the number of sets when a user clicks go
* **timer**: default timer for the exercise, this is where the timer starts each countdown (working, rest)

It's not the prettiest state but it works.

### Gotchas

There were a few lessons learned making this.

#### MP4

I never knew how inefficient gifs were until I got really into this project. I had to go through and convert them all to muted mp4s, after converting them to webm and realizing that doesn't work on iOS.

#### Sounds

Sounds are weird. I had to be very explicit about when sounds would start and stop, a lot of browsers do not like when multiple sounds are playing.

#### Time

Without a real state, making a decent timer was an issue. There's up to 999ms lag between clicking the pause button and the timer actually pausing, this is because I put it in the sleep function, which checks every 1000ms. There's a 50ms delay to resuming, which is not noticeable but also a little stupid.

## Future Work

With about 180 lines of javascript and a dozen html elements, we have a random workout generator. The app is fully functional, quick, and it does exactly what I set out to do. There are more features I could add, and I could make it prettier, but at this point I don't think there's a reason to limit myself further by keeping it on my github pages site.

I've transitioned this to a typescript React app, which makes all of this so much easier. I am trying out react-static and progressive web app architecture to make a cross platform website/app that is super fast and really easy to use. I'll implement new features, while making it more responsive and nicer to look at. Moving it out of my private repo means I can collaborate with friends, and our goal is to create a workout app that we'd actually want to use.

#### Links

* [My new github repo](https://github.com/nickjmiller/integrum-amplify/)
* [The webpage (this link will probably be dead soon, we want to rename it)](https://integrum.nickmiller.dev)