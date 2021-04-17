/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/

const jokes = [];

/*------------------------ Cached Element References ------------------------*/
const norrisBtn = document.getElementById("norrisBtn");
const genBtn = document.getElementById("genBtn");
const progBtn = document.getElementById("progBtn");
const container = document.getElementById("containerDiv");
const lightDarkBtn = document.getElementById("lightDarkButton");
const body = document.getElementById("");

/*----------------------------- Event Listeners -----------------------------*/

norrisBtn.addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let newJoke = {};
      newJoke["category"] = "Norris";
      newJoke["joke"] = data.value;
      jokes.push(newJoke);
      render();
    })
    .catch((err) => {
      console.log(err);
    });
});

genBtn.addEventListener("click", () => {
  fetch("https://official-joke-api.appspot.com/jokes/general/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let newJoke = {};
      newJoke["category"] = data[0].type;
      newJoke["joke-p1"] = data[0].setup;
      newJoke["joke-p2"] = data[0].punchline;
      jokes.push(newJoke);
      render();
    })
    .catch((err) => {
      console.log(err);
    });
});

progBtn.addEventListener("click", () => {
  fetch("https://official-joke-api.appspot.com/jokes/programming/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let newJoke = {};
      newJoke["category"] = data[0].type;
      newJoke["joke-p1"] = data[0].setup;
      newJoke["joke-p2"] = data[0].punchline;
      jokes.push(newJoke);
      render();
    })
    .catch((err) => {
      console.log(err);
    });
});

/*-------------------------------- Functions --------------------------------*/

function appendDiv(joke, category, idx) {
  let newDiv = document.createElement("div");
  newDiv.innerHTML = `
                        <div class="card h-100" id="${category.toLowerCase()}">
                          <div class='card-header ${category}-header'>${category}</div>
                          <div class="card-body">
                            <p>${joke}</p>                              
                          </div>
                            <button id = 'delButton' class='btn btn-dark btn-lg' onClick={deleteJoke(${idx})}>🗑</button>     
                        </div>    
                        `;
  container.appendChild(newDiv);
}

function render() {
  container.innerHTML = "";
  jokes.forEach((joke, idx) => {
    if (joke["joke-p1"]) {
      appendDiv2(joke["category"], joke["joke-p1"], joke["joke-p2"], idx);
    } else {
      appendDiv(joke["joke"], joke["category"], idx);
    }
  });
}

function appendDiv2(category, setup, punchline, idx) {
  let newDiv = document.createElement("div");

  newDiv.innerHTML = `
                        <div class="card h-100" id="${category.toLowerCase()}">
                        <div class='card-header ${category}-header'>${
    category[0].toUpperCase() + category.slice(1)
  }</div>
                            <div class="card-body">
                                    <p>${setup}</p>
                                    <p>${punchline}</p>
                            </div>
                            <button id = 'delButton' class='btn btn-dark btn-lg' onClick={deleteJoke(${idx})}>🗑</button>
                        </div>    
                        `;
  container.appendChild(newDiv);
}

function deleteJoke(idx) {
  jokes.splice(idx, 1);
  render();
}
