
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox .close");

  // buka lightbox
  document.querySelectorAll(".project img").forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  // tutup lightbox
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // klik di luar gambar untuk tutup
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll('.projects .project img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox .close');

  // Tambahan tombol next/prev
  const prevBtn = document.createElement("span");
  prevBtn.classList.add("prev");
  prevBtn.innerHTML = "&#10094;"; // simbol <
  lightbox.appendChild(prevBtn);

  const nextBtn = document.createElement("span");
  nextBtn.classList.add("next");
  nextBtn.innerHTML = "&#10095;"; // simbol >
  lightbox.appendChild(nextBtn);

  let currentIndex = 0;

  // buka lightbox
  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentIndex = index;
      showImage(currentIndex);
      lightbox.style.display = 'flex';
    });
  });

  // fungsi ganti gambar
  function showImage(index) {
    if (index < 0) index = galleryImages.length - 1;
    if (index >= galleryImages.length) index = 0;
    currentIndex = index;
    lightboxImg.src = galleryImages[currentIndex].src;
  }

  // event tombol
  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showImage(currentIndex - 1);
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showImage(currentIndex + 1);
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});