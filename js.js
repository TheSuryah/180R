window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.backgroundColor = "#111111";
    document.getElementById("mobile-navbar").style.backgroundColor = "#111111";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("mobile-navbar").style.backgroundColor = "transparent";
  }
}

function openMenu() {
  document.getElementById("menu").style.width = "100%";
}

function closeMenu() {
  document.getElementById("menu").style.width = "0%";
}