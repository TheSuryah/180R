window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.backgroundColor = "#111111";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("mobile-navbar").style.backgroundColor = "#111111";
  } else {
    document.getElementById("mobile-navbar").style.backgroundColor = "transparent";
  }
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("glimpse").style.opacity = "1";
  } else {
    document.getElementById("glimpse").style.opacity = "0";
  }
}

function openMenu() {
  document.getElementById("menu").style.height = "100%";
}

function closeMenu() {
  document.getElementById("menu").style.height = "0%";
}