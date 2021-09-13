window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.backgroundColor = "#111111";
    document.getElementById("mobile-navbar").style.backgroundColor = "#111111";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("mobile-navbar").style.backgroundColor = "transparent";
  }
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("cards").style.opacity = "1";
  } else {
    document.getElementById("cards").style.opacity = "0";
  }
}

function openMenu() {
  document.getElementById("menu").style.width = "100%";
}

function closeMenu() {
  document.getElementById("menu").style.width = "0%";
}