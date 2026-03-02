// Toggle class active untuk hamburger menu
const navbarnav = document.querySelector(".navbar-nav");

// Ketika hamburger menu diklik
document.querySelector("#humberger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const humberger = document.querySelector("#humberger-menu");

document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});

// FITUR BARU: Kirim Pesan ke WhatsApp
const contactForm = document.querySelector("form");

contactForm.onsubmit = function (e) {
  e.preventDefault(); // Mencegah halaman refresh

  // Ambil data dari input
  const nama = contactForm.querySelector('input[placeholder="nama"]').value;
  const email = contactForm.querySelector('input[placeholder="email"]').value;
  const nohp = contactForm.querySelector('input[placeholder="no.hp"]').value;

  // Nomor WA Yayasan (Format Internasional tanpa tanda +)
  const nomorWA = "6285194044236";

  // Susun template pesan
  const pesan = `Halo Yayasan Al-Insan,%0A%0ASaya ingin bertanya lebih lanjut mengenai program yayasan.%0A%0A*Data Pengunjung:*%0A- Nama: ${nama}%0A- Email: ${email}%0A- No. HP: ${nohp}`;

  // Buka link WhatsApp di tab baru
  window.open(`https://wa.me/${nomorWA}?text=${pesan}`, "_blank");
};
