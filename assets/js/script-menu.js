"use strict";

document.getElementById("btn-menu1")
        .addEventListener("click", function() {
  document.getElementById("menu1").hidden = false;
  document.getElementById("menu2").hidden = true;
  document.getElementById("menu3").hidden = true;
  document.getElementById("menu4").hidden = true;
}, false);

document.getElementById("btn-menu2")
        .addEventListener("click", function() {
  document.getElementById("menu1").hidden = true;
  document.getElementById("menu2").hidden = false;
  document.getElementById("menu3").hidden = true;
  document.getElementById("menu4").hidden = true;
}, false);

document.getElementById("btn-menu3")
        .addEventListener("click", function() {
  document.getElementById("menu1").hidden = true;
  document.getElementById("menu2").hidden = true;
  document.getElementById("menu3").hidden = false;
  document.getElementById("menu4").hidden = true;
}, false);

document.getElementById("btn-menu4")
        .addEventListener("click", function() {
  document.getElementById("menu1").hidden = true;
  document.getElementById("menu2").hidden = true;
  document.getElementById("menu3").hidden = true;
  document.getElementById("menu4").hidden = false;
}, false);