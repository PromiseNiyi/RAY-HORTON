// const doc = document;
// const menuOpen = doc.querySelector(".menu");
// const menuClose = doc.querySelector(".close");
// const overlay = doc.querySelector(".overlay");

// menuOpen.addEventListener("click", () => {
//   overlay.classList.add("overlay--active");
// });

// menuClose.addEventListener("click", () => {
//   overlay.classList.remove("overlay--active");
// });



    // Open the overlay when the menu button is clicked.
    document.getElementById('menuBtn').addEventListener('click', function() {
      document.getElementById('overlay').classList.add('active');
    });

    // Close the overlay when the X button is clicked.
    document.getElementById('closeBtn').addEventListener('click', function() {
      document.getElementById('overlay').classList.remove('active');
    });