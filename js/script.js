// 1. Toggle class active untuk hamburger menu
const navbarnav = document.querySelector(".navbar-nav");

// Ketika hamburger menu diklik
document.querySelector("#humberger-menu").onclick = (e) => {
  navbarnav.classList.toggle("active");
  e.preventDefault(); // Mencegah lompatan link
};

// 2. Klik di luar sidebar untuk menghilangkan nav
const humberger = document.querySelector("#humberger-menu");

document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});

// 3. FITUR: Kirim Pesan ke WhatsApp
const contactForm = document.querySelector("form");

if (contactForm) {
  contactForm.onsubmit = function (e) {
    e.preventDefault();

    // Mengambil data berdasarkan ID agar lebih akurat
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const nohp = document.getElementById("nohp").value;

    // Nomor WA Yayasan
    const nomorWA = "6285194044236";

    // Susun template pesan dengan format Bold di WhatsApp
    const pesan = `Halo Yayasan Al-Insan,%0A%0ASaya *${nama}* ingin bertanya lebih lanjut mengenai program yayasan.%0A%0A*Data Pengunjung:*%0A- Email: ${email}%0A- No. HP: ${nohp}`;

    window.open(`https://wa.me/${nomorWA}?text=${pesan}`, "_blank");
  };
}

// 4. Inisialisasi AOS (Animate On Scroll)
// Ini yang membuat elemen website muncul mengalir saat di-scroll
if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 1000, // Kecepatan animasi (1 detik)
    once: true, // Animasi hanya berjalan sekali saat di-scroll ke bawah
    offset: 120, // Jarak mulai animasi dari posisi elemen
  });
}

// 5. Efek Navbar Berubah Warna Saat Scroll (Opsional agar lebih hidup)
window.onscroll = () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    nav.style.backgroundColor = "rgba(1, 1, 1, 0.95)"; // Lebih gelap saat di-scroll
    nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
  } else {
    nav.style.backgroundColor = "rgba(1, 1, 1, 0.8)"; // Kembali transparan
    nav.style.boxShadow = "none";
  }
};
