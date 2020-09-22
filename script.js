$(document).ready(function () {
  $(".burgermenu").click(function () {
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
var modal = document.getElementById("myModal");

var btn = document.querySelector("#work");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
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