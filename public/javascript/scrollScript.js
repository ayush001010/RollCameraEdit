const slider = document.getElementById("slider");

function startVerticalScroll() {
  const cardHeight = slider.querySelector(".project").offsetHeight + 10;
  function scroll() {
    slider.scrollTop += cardHeight;

    if (slider.scrollTop >= slider.scrollHeight - slider.clientHeight) {

      slider.scrollTop = 0;
    }
  }

  setInterval(scroll, 3000);
}

document.addEventListener("DOMContentLoaded", startVerticalScroll);
