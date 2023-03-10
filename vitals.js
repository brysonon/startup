class Caregiver {
  hours;

  constructor() {
    this.hours = 0;
    
    const caregiverName = document.querySelector('.caregiver-name');
    caregiverName.textContent = this.getCaregiverName();
  }

  getCaregiverName() {
    return localStorage.getItem('username') ?? 'Anonymous user';
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
