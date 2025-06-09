const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-imagem");
const lightboxClose = document.querySelector(".lightbox-close");
const galleryImages = document.querySelectorAll(".galeria-item img");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImage.src = image.src;
  });
});

function closeLightbox() {
  lightbox.style.display = "none";
}

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
  }
});
