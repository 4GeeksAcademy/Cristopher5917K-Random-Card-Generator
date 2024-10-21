/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  let numCard = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  let picas = [`♦`, `♥`, `♠`, `♣`];
  let picasRandom = Math.floor(Math.random() * picas.length);

  let card = document.querySelector("#card");
  let divTop = document.createElement("div");
  let divMid = document.createElement("div");
  let divBotoom = document.createElement("div");

  card.classList.add("card");
  card.appendChild(divTop).classList = "picas";
  card.appendChild(divMid).classList = "numCard";
  card.appendChild(divBotoom).classList = "picasBottom";

  divTop.textContent = picas[picasRandom];
  divMid.textContent = Math.floor(Math.random() * numCard.length);
  divBotoom.textContent = picas[picasRandom];
};
