function toggleMenu() {
  var menu = document.getElementById("leftMenu");
  menu.classList.toggle("collapsed");
  var items = menu.querySelectorAll("ul li span");
  items.forEach(function (item) {
    if (menu.classList.contains("collapsed")) {
      item.style.display = "none";
    } else {
      item.style.display = "inline";
    }
  });
}

function adjustPageWidth() {
  const width = window.innerWidth;
  console.log(`Screen width: ${width}px`);

  if (width >= 992 && width <= 1600) {
    document.body.style.width = "90%";
  } else if (width >= 700 && width <= 767) {
    document.body.style.width = "80%";
  } else if (width >= 600 && width < 700) {
    document.body.style.width = "75%";
  } else if (width <= 600) {
    document.body.style.width = "50%";
  } else {
    document.body.style.width = "100%";
  }
}

// Apply the function on window resize
window.addEventListener("resize", adjustPageWidth);

// Apply the function on initial page load
adjustPageWidth();
