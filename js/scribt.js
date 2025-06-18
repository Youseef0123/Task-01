// التاريخ الحالي + 7 أيام
const endDate = new Date();
endDate.setDate(endDate.getDate() + 7);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = endDate - now;

  if (distance <= 0) {
    document.querySelector(".countdown-timer").innerHTML = "Competition Ended!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();




// For tabs 
document.querySelectorAll('.nav-link').forEach(tab => {
  tab.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelectorAll('.nav-link').forEach(t => t.classList.remove('active'));

    document.querySelectorAll('.tab-content').forEach(c => c.classList.add('d-none'));

    tab.classList.add('active');

    const targetTab = tab.getAttribute('data-tab');
    document.querySelectorAll(`.tab-content[data-tab="${targetTab}"]`).forEach(c => {
      c.classList.remove('d-none');
    });
  });
});





const canvas = document.getElementById('scoreChart');
const ctx = canvas.getContext('2d');

// Create the gradient manually (top to bottom)
const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
gradient.addColorStop(0, '#FFFFFF');   
gradient.addColorStop(1, '#858585');     

const score = 150;
const maxScore = 200;

const chart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [score, maxScore - score],
      backgroundColor: [gradient, '#2c2c2c'],
      borderWidth: 0,
      cutout: '90%',
      borderRadius: [
        { outerStart: 10, outerEnd: 10, innerStart: 10, innerEnd: 10 }, // للجزء الأول (المملوء)
        { outerStart: 0, outerEnd: 0, innerStart: 0, innerEnd: 0 }      // للجزء الثاني (الفاضي)
      ]
    }]
  },
  options: {
    responsive: false,
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false }
    },
    animation: {
      animateRotate: true,
      duration: 1500
    }
  }
});