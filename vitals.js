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

