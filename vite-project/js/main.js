import "../styles/style.css";

const DOMSelectors = {
  b1: document.querySelector("#wrongd1"),
  b2: document.querySelector("#wrongd2"),
  b3: document.querySelector("#correctd"),
  card1: document.querySelector("#card1"),
  card2: document.querySelector("#card2"),
  card3: document.querySelector("#card3"),
  d1: document.querySelector(".d1"),
  d2: document.querySelector(".d2"),
  d3: document.querySelector(".d3"),
  playButton: document.querySelector(".play"),
};

function conclusion(x) {
  document.querySelector(".cardcontainer").insertAdjacentHTML(
    "beforeend",
    `<p class="result">YOU ${x}</p>
    <button class="again">PLAY AGAIN</button>
  <`
  );
}

DOMSelectors.b1.addEventListener("click", function () {
  if (DOMSelectors.b1.classList.contains("select")) {
    DOMSelectors.card1.classList.add("selected");
    DOMSelectors.card1.classList.remove("card");
    DOMSelectors.d2.remove();
    DOMSelectors.card2.insertAdjacentHTML(
      "beforeend",
      `
  <img class="d2" src="public/Screenshot 2023-03-05 234106.png" width="70%">`
    );
    DOMSelectors.b1.remove();
    DOMSelectors.b2.remove();
    DOMSelectors.b3.remove();
    DOMSelectors.card1.insertAdjacentHTML(
      "beforeend",
      `
    <button id="wrongd" class="select" class="b1">STAY</button>`
    );
    DOMSelectors.card3.insertAdjacentHTML(
      "beforeend",
      `
    <button id="correctd" class="select" class="b3">SWITCH</button>`
    );
    DOMSelectors.card2.classList.add("remove");
    DOMSelectors.card2.classList.remove("card");
  }
});

DOMSelectors.b2.addEventListener("click", function () {
  if (DOMSelectors.b2.classList.contains("select")) {
    DOMSelectors.card2.classList.add("selected");
    DOMSelectors.card2.classList.remove("card");
    DOMSelectors.d1.remove();
    DOMSelectors.card1.insertAdjacentHTML(
      "beforeend",
      `
    <img class="d2" src="public/goat.png" width="70%">`
    );
    DOMSelectors.b1.remove();
    DOMSelectors.b2.remove();
    DOMSelectors.b3.remove();
    DOMSelectors.card2.insertAdjacentHTML(
      "beforeend",
      `
      <button id="wrongd" class="select" class="b1">STAY</button>`
    );
    DOMSelectors.card3.insertAdjacentHTML(
      "beforeend",
      `
      <button id="correctd" class="select" class="b3">SWITCH</button>`
    );
    DOMSelectors.card1.classList.add("remove");
    DOMSelectors.card1.classList.remove("card");
  }
});
function selected3() {
  DOMSelectors.b3.addEventListener("click", function () {
    if (DOMSelectors.b3.classList.contains("select")) {
      DOMSelectors.card3.classList.add("selected");
      DOMSelectors.card3.classList.remove("card");
      DOMSelectors.d2.remove();
      DOMSelectors.card2.insertAdjacentHTML(
        "beforeend",
        `
    <img class="d2" src="public/goat.png" width="70%">`
      );
      DOMSelectors.b1.remove();
      DOMSelectors.b2.remove();
      DOMSelectors.b3.remove();
      DOMSelectors.card3.insertAdjacentHTML(
        "beforeend",
        `
        <button id="correctd" class="select" class="b3">STAY</button>`
      );
      DOMSelectors.card1.insertAdjacentHTML(
        "beforeend",
        `
      <button id="wrongd" class="select" class="b3">SWITCH</button>`
      );
      DOMSelectors.card2.classList.add("remove");
      DOMSelectors.card2.classList.remove("card");
    }
  });
}

selected3();

DOMSelectors.b3.addEventListener("click", function () {
  if (document.querySelector("#card3").classList.contains("selected")) {
    document.querySelector("#correctd").addEventListener("click", function () {
      DOMSelectors.d1.remove();
      DOMSelectors.d3.remove();
      DOMSelectors.card1.insertAdjacentHTML(
        "afterbegin",
        `
      <img class="d3" src="public/goat.png" width="70%">`
      );
      DOMSelectors.card3.insertAdjacentHTML(
        "afterbegin",
        `
      <img class="d3" src="public/lambo.png" width="70%">`
      );
      document.querySelector("#wrongd").remove();
      document.querySelector("#correctd").remove();
      DOMSelectors.card1.classList.add("remove");
      DOMSelectors.card1.classList.remove("card");
      conclusion("WON");
    });
    document.querySelector("#wrongd").addEventListener("click", function () {
      DOMSelectors.d1.remove();
      DOMSelectors.d3.remove();
      DOMSelectors.card1.insertAdjacentHTML(
        "afterbegin",
        `
          <img class="d1" src="public/goat.png" width="70%">`
      );
      DOMSelectors.card3.insertAdjacentHTML(
        "afterbegin",
        `
          <img class="d3" src="public/lambo.png" width="70%">`
      );
      document.querySelector("#wrongd").remove();
      document.querySelector("#correctd").remove();
      DOMSelectors.card3.classList.add("remove");
      DOMSelectors.card3.classList.remove("selected");
      DOMSelectors.card1.classList.add("selected");
      DOMSelectors.card3.classList.remove("card");
      conclusion("LOSE");
    });
  }
});

DOMSelectors.b2.addEventListener("click", function () {
  if (document.querySelector("#card2").classList.contains("selected")) {
    document.querySelector("#correctd").addEventListener("click", function () {
      DOMSelectors.d2.remove();
      DOMSelectors.d3.remove();
      DOMSelectors.card2.insertAdjacentHTML(
        "afterbegin",
        `
        <img class="d3" src="public/goat.png" width="70%">`
      );
      DOMSelectors.card3.insertAdjacentHTML(
        "afterbegin",
        `
        <img class="d3" src="public/lambo.png" width="70%">`
      );
      document.querySelector("#wrongd").remove();
      document.querySelector("#correctd").remove();
      DOMSelectors.card2.classList.add("remove");
      DOMSelectors.card2.classList.remove("selected");
      DOMSelectors.card3.classList.add("selected");
      DOMSelectors.card3.classList.remove("card");
      conclusion("WON");
    });
    document.querySelector("#wrongd").addEventListener("click", function () {
      DOMSelectors.d2.remove();
      DOMSelectors.d3.remove();
      DOMSelectors.card2.insertAdjacentHTML(
        "afterbegin",
        `
            <img class="d1" src="public/goat.png" width="70%">`
      );
      DOMSelectors.card3.insertAdjacentHTML(
        "afterbegin",
        `
            <img class="d3" src="public/lambo.png" width="70%">`
      );
      document.querySelector("#wrongd").remove();
      document.querySelector("#correctd").remove();
      DOMSelectors.card3.classList.add("remove");
      DOMSelectors.card3.classList.remove("card");
      conclusion("LOSE");
    });
  }
});

DOMSelectors.b1.addEventListener("click", function () {
  if (document.querySelector("#card1").classList.contains("selected")) {
    document.querySelector("#correctd").addEventListener("click", function () {
      DOMSelectors.d1.remove();
      DOMSelectors.d3.remove();
      DOMSelectors.card1.insertAdjacentHTML(
        "afterbegin",
        `
          <img class="d3" src="public/goat.png" width="70%">`
      );
      DOMSelectors.card3.insertAdjacentHTML(
        "afterbegin",
        `
          <img class="d3" src="public/lambo.png" width="70%">`
      );
      document.querySelector("#wrongd").remove();
      document.querySelector("#correctd").remove();
      DOMSelectors.card1.classList.add("remove");
      DOMSelectors.card1.classList.remove("selected");
      DOMSelectors.card3.classList.add("selected");
      DOMSelectors.card3.classList.remove("card");
      conclusion("WON");
    });

    document.querySelector("#wrongd").addEventListener("click", function () {
      DOMSelectors.d1.remove();
      DOMSelectors.d3.remove();
      DOMSelectors.card1.insertAdjacentHTML(
        "afterbegin",
        `
              <img class="d1" src="public/goat.png" width="70%">`
      );
      DOMSelectors.card3.insertAdjacentHTML(
        "afterbegin",
        `
              <img class="d3" src="public/lambo.png" width="70%">`
      );
      document.querySelector("#wrongd").remove();
      document.querySelector("#correctd").remove();
      DOMSelectors.card3.classList.add("remove");
      DOMSelectors.card3.classList.remove("card");
      conclusion("LOSE");
    });
  }
});

documents
  .querySelector(".cardcontainer")
  .addEventListener("click", function (event) {
    if (event.target.matches(".again")) {
      location.reload();
    }
  });
