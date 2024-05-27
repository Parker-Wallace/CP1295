'use strict';

addEventListener("DOMContentLoaded", () => {
    body = document.getElementById("body")
    body.append("Hello, World!")
})

// psuedo jquery
const $ = selector => document.querySelector(selector)