/**
 * @copyright codewithsadee 2023
 * @author Sadee <codewithsadee24@gmail.com>
 */

"use strict";

/**
 * Light and dark mode toggle
 */
const $HTML = document.documentElement;
const $themeBtn = document.querySelector("[data-theme-btn]"); 
let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if(sessionStorage.getItem("theme") === "dark") {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  $HTML.dataset.theme = isDark ? "dark" : "light";
  sessionStorage.setItem("theme", $HTML.dataset.theme);
}

const changeTheme = () => {
    $HTML.dataset.theme = sessionStorage.getItem("theme") === "dark" ? "light" : "dark";
    sessionStorage.setItem("theme", $HTML.dataset.theme);
};

$themeBtn.addEventListener("click", changeTheme)
 