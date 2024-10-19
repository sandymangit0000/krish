function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }
  function log() {
    window.location.href="login.html"
  }
  document.getElementById('menu-btn').addEventListener('click', function() {
    const navList = document.getElementById('nav-list');
    if (navList.style.display === 'block') {
       navList.style.display = 'none';
    } else {
        navList.style.display = 'block';
    }
  });

  let targetDate = new Date("Nov 30, 2024 23:59:59").getTime();

// Update the countdown every 1 second
let countdownFunction = setInterval(function() {
  
    // Get today's date and time
    let now = new Date().getTime();
  
    // Find the difference between now and the target date
    let difference = targetDate - now;
  
    // Time calculations for days, hours, minutes, and seconds
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    // Display the result in the respective HTML elements
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  
    // If the countdown is over, display some message
    if (difference < 0) {
        clearInterval(countdownFunction);
        document.querySelector('.countdown').innerHTML = "Time is up!";
    }
  
}, 1000);
let customer=0;
custslides(customer)
function change(a)
{
   customer+=a;
   if(customer>=2)
    {
        customer=0;
    } 
    if(customer<0)
    {
        customer=1;
    }
    custslides(customer)
}
function custslides(hello)
{
    let indx=document.getElementsByClassName("custo")
    for(let j=0;j<indx.length;j++)
    {
        indx[j].style.display="none";
    }
    let s= hello * 4;
    let e= s + 4;
    for (let z = s; z <e; z++) {
        indx[z].style.display = "inline";
    }
}
function viewCart()
{
    window.location.href="cart.html";
}
function now()
{
    window.location.href="categories.html"
}
function clothing()
{
    window.location.href="clothing.html"
}
function accessories()
{
    window.location.href="accessories.html"
}
function shoes()
{
    window.location.href="shoes.html"
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("homepage").style.top = "0";
    
  } else {
    document.getElementById("homepage").style.top = "-50px";
    document.getElementById("homepage").style.backgroundColor = "Red";
  }
}
document.getElementById('menu-btn').addEventListener('click', function() {
    const navList = document.getElementById('nav-list');
    if (navList.style.display === 'block') {
      navList.style.display = 'none';
    } else {
      navList.style.display = 'block';
    }
  });