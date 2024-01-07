/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  excuse();
};

function excuse() {
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
  let whotext = textgenerator(who);
  let actiontext = textgenerator(action);
  let whattext = textgenerator(what);
  let whentext = textgenerator(when);
  console.log(whotext, actiontext, whattext, whentext);
  document.getElementById("excuse").innerHTML =
    whotext + " " + actiontext + " " + whattext + " " + whentext;
}

function textgenerator(random) {
  return random[Math.floor(Math.random() * random.length)];
}
