let header = document.querySelector("header");
let headerAnchor = document.querySelectorAll("header nav ul li a");

window.addEventListener("scroll", () => {
  if (window.scrollY != 0) {
    header.style.backgroundColor = "rgba(0, 0, 0 , 0.3)";
    header.style.color = "white";
    headerAnchor.forEach((a) => {
      a.style.color = "white";
    });
  } else {
    header.style = "";
    headerAnchor.forEach((a) => {
      a.style.color = "";
    });
  }
});
