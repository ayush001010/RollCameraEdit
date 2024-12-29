const slider = document.getElementById("slider");

function startVerticalScroll() {
  const cardHeight = slider.querySelector(".project").offsetHeight + 10; // Card height + gap

  // Scroll the slider
  function scroll() {
    slider.scrollTop += cardHeight; // Scroll by one card's height

    if (slider.scrollTop >= slider.scrollHeight - slider.clientHeight) {
      // Reset to the first project when the end is reached
      slider.scrollTop = 0;
    }
  }

  // Start scrolling every 2 seconds (adjust as needed)
  setInterval(scroll, 3000);
}

// Start the vertical scrolling when the DOM content is loaded
document.addEventListener("DOMContentLoaded", startVerticalScroll);
