// Toggle class active
const navbarnav = document.querySelector(".navbar-nav");

// Ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

//klik di luar side bar untuk menghilangkan navbar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active"); // Menutup navbar saat klik di luar area
  }
});

// Mengubah background gambar setiap 5 detik
const hero = document.querySelector(".hero");

// Daftar gambar background
const images = [
  "image/header-bg1.jpg",
  "image/header-bg2.jpg",
  "image/header-bg3.jpg",
];

let currentIndex = 0;

// Fungsi untuk mengganti background setiap 5 detik
function changeBackground() {
  currentIndex = (currentIndex + 1) % images.length; // Looping index
  hero.style.opacity = 1; // Mulai dengan opacity 0 untuk membuat efek transisi
  setTimeout(() => {
    hero.style.backgroundImage = `url('${images[currentIndex]}')`; // Ganti gambar
    hero.style.opacity = 1; // Kembalikan opacity ke 1 setelah gambar diganti
  }, 5000); // Durasi 1 detik untuk transisi
}

// Ganti gambar setiap 5 detik
setInterval(changeBackground, 8000);

// Get modal elements
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var modalDesc = document.getElementById("modalDescription");

// Get modal elements
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var modalDesc = document.getElementById("modalDescription");

// Get all clickable images
var clickableImages = document.querySelectorAll(".image-clickable");

// Loop through images and add click event
clickableImages.forEach(function (image) {
  image.onclick = function () {
    var title = this.getAttribute("data-title");
    var description = this.getAttribute("data-description");

    // Display modal with the selected image and description
    modal.style.display = "block"; // Show modal
    modalImg.src = this.src; // Set image in modal
    modalDesc.textContent = description; // Set description in modal
  };
});

// Close modal when clicking the close button
var closeButton = document.getElementsByClassName("close")[0];
closeButton.onclick = function () {
  // Reset the modal content to initial state
  modalImg.src = ""; // Clear image
  modalDesc.textContent = ""; // Clear description

  // Close modal
  modal.style.display = "none";
};

// Close modal if user clicks outside of the modal content
window.onclick = function (event) {
  // Check if the click happened outside the modal content
  if (event.target == modal) {
    // Reset the modal content to initial state
    modalImg.src = ""; // Clear image
    modalDesc.textContent = ""; // Clear description

    // Close modal
    modal.style.display = "none";
  }
};
