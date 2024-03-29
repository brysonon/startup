class Caregiver {
  hours;

  constructor() {
    this.hours = 0;
    
    const caregiverName = document.querySelector('.caregiver-name');
    caregiverName.textContent = this.getCaregiverName();
  }

  getCaregiverName() {
    return localStorage.getItem('userName') ?? 'Anonymous user';
  }
}

const caregiver = new Caregiver();
var loginTime = new Date(); 

setInterval(function() {
    var timeLoggedIn = new Date() - loginTime;

    var secondsTotal = timeLoggedIn / 1000;
    var hours = Math.floor(secondsTotal / 3600);
    var minutes = Math.floor(secondsTotal / 60) % 3600;
    var seconds = Math.floor(secondsTotal)  % 60;

    document.getElementById('timer').innerHTML = hours + ":" + minutes + ":" + seconds;
}, 1000);

document.getElementById("output").style.display = "none";

var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
      response => response.json()
  ).then((html) => {
    // you can put any JS code here
    var x = document.getElementById('output');
    x.style.display = 'block';
  
    const formToReset = document.getElementById('sheetdb-form');
    formToReset.addEventListener('submit', (e) => {
      e.preventDefault();
      formToReset.reset();
    });
  });
});

//display quote
function displayQuote(data) {
  const containerEl = document.querySelector("#quote");

  const quoteEl = document.createElement("p");
  quoteEl.classList.add("quote");
  const authorEl = document.createElement("p");
  authorEl.classList.add("author");

  quoteEl.textContent = data.content;
  authorEl.textContent = data.author;

  containerEl.appendChild(quoteEl);
  containerEl.appendChild(authorEl);
}

function callService(url, displayCallback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayCallback(data);
    });
}

const random = Math.floor(Math.random() * 1000);
callService("https://api.quotable.io/random", displayQuote);

