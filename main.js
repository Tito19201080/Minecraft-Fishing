// Functionize Minecraft Fishing Start Code

// HTML Variables
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");
let plus5Btn = document.getElementById("plus5");
let until200Btn = document.getElementById("until200");
let fishInfIn = +document.getElementById("fish-inf").value;
let inventoryDivEl = document.getElementById("Inventory");

// Fish Count Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;
inventoryDivEl.value = "";

// Button & Input Event Listeners
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);
document.getElementById("plus5").addEventListener("click", plus5);
document.getElementById("until200").addEventListener("click", until200);
document.getElementById("fish-inf").addEventListener("change", fishInf);
document.getElementById("sort-fish").addEventListener("click", sortFish);

function fishBtnClicked() {
  // Determine Selected Character
  let character = document.getElementById("character-select").value;

  if (character === "steve") {
    // Steve Fish Simulator
    let randNum = Math.random();
    console.log(randNum);

    if (randNum < 0.7) {
      resultImg.src = "img/Raw-Cod.png";
      numCod += 1;
      numCodSpan.innerHTML = numCod;
      inventoryDivEl.innerHTML =
        inventoryDivEl.innerHTML + "<img src='img/Raw-Cod.png'</img>";
    } else if (randNum < 0.9) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon += 1;
      numSalmonSpan.innerHTML = numSalmon;
      inventoryDivEl.innerHTML =
        inventoryDivEl.innerHTML + "<img src='img/Raw-Salmon.png'</img>";
    } else if (randNum < 0.95) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical += 1;
      numTropicalSpan.innerHTML = numTropical;
      inventoryDivEl.innerHTML =
        inventoryDivEl.innerHTML + "<img src='img/Tropical-Fish.png'</img>";
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer += 1;
      numPufferSpan.innerHTML = numPuffer;
      inventoryDivEl.innerHTML =
        inventoryDivEl.innerHTML + "<img src='img/Pufferfish.png'</img>";
    }
  } else if (character === "alex") {
    // Alex Fish Simulator
    let randNum = Math.random();
    console.log(randNum);

    if (randNum < 0.1) {
      resultImg.src = "img/Raw-Cod.png";
      numCod += 1;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.2) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon += 1;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum < 0.5) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical += 1;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer += 1;
      numPufferSpan.innerHTML = numPuffer;
    }
  } else {
    // Villager Fish Simulator
    let randNum = Math.random();
    console.log(randNum);

    if (randNum < 0.25) {
      resultImg.src = "img/Raw-Cod.png";
      numCod += 1;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.5) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon += 1;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum < 0.75) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical += 1;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer += 1;
      numPufferSpan.innerHTML = numPuffer;
    }
  }
}

function plus5() {
  for (let n = 1; n <= 5; n++) {
    fishBtnClicked();
  }
}

function until200() {
  let codTarget = numCod + 200;
  let count = 0;
  while (numCod < codTarget) {
    fishBtnClicked();
    count++;
  }
  console.log(count);
}

function fishInf() {
  let fishMax = 300;

  while (fishInfIn < fishMax) {
    fishBtnClicked();
    fishInfIn++;
  }
}

function sortFish() {
  document.getElementById("Inventory").innerHTML = "";
  while (numCod > 0) {
    fishBtnClicked();
  }
}
