/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  excuseGenerator();
};

function excuseGenerator() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let whoText = textGenerator(who);
  let actionText = textGenerator(action);
  let whatText = textGenerator(what);
  let whenText = textGenerator(when);
  console.log(whoText, actionText, whatText, whenText);
  document.getElementById("excuse").innerHTML =
    whoText + " " + actionText + " " + whatText + " " + whenText;
}

function textGenerator(random) {
  return random[Math.floor(Math.random() * random.length)];
}
