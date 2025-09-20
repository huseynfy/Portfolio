$(document).ready(function () {
  $("#labelformenuicon").click(function () {
    $(".burgeritems").slideToggle()
  })
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
})

///MODALS

let allWorks = document.querySelectorAll('.work');
let modals = document.querySelectorAll('.modal');
let closes = document.querySelectorAll('.close');


for (let i = 0; i < allWorks.length; i++) {
    allWorks[i].addEventListener('click',()=>{
      modals[i].style.display = 'block'
    })
    closes[i].addEventListener('click',()=>{
      modals[i].style.display = "none";
    })
}

document.addEventListener('keydown',function(e){
  if(e.key == 'Escape'){
    for (let i = 0; i < modals.length; i++) {
      modals[i].style.display = "none";
    }
  }
})

window.ontouchstart = function(event){
  for (let i = 0; i < allWorks.length; i++) {
    if(event.target == modals[i]){
      modals[i].style.display = "none";
    }
}
}

window.onclick = function(event){
  for (let i = 0; i < allWorks.length; i++) {
    if(event.target == modals[i]){
      modals[i].style.display = "none";
    }
  }
}


///BACK TO TOP
const backtotop = document.getElementById('backtotop')

window.onscroll = function () { scrollfunction() }

function scrollfunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    backtotop.style.display = 'block'
  } else {
    backtotop.style.display = 'none'
  }
}

function scrollToTop() {
  var position =
    document.body.scrollTop || document.documentElement.scrollTop;
  if (position) {
    window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
    scrollAnimation = setTimeout("scrollToTop()", 5);
  } else clearTimeout(scrollAnimation);
}



// Scrolling Animation

const works = gsap.utils.toArray('.work');

works.forEach(work=>{
  const anim = gsap.fromTo(
    work,
    {
      autoAlpha:0,
      y:100,
      x:-100,
      rotate:-10
    },
    {
      duration:0.6,
      autoAlpha:1,
      y:0,
      x:0,
      rotate:0
    }
  );
  ScrollTrigger.create({
    trigger:work,
    animation:anim
  })
})

function updateDate(){
  let date = new Date();
  let year = date.getFullYear();
  document.getElementById('copyright').innerHTML = '© ' + year + ' Huseyn Yusifov. All rights reserved.';
}

updateDate();

console.log('%cIF YOU TRY TO COPY THE WEBSITE, PLEASE EMAIL ME','font-size:24px;color:salmon;')