// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling (WhatsApp only)
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validasi input
    if (!name || !email || !message) {
        alert('Harap isi semua field yang diperlukan.');
        return;
    }

    // Waktu pemesanan
    const now = new Date().toLocaleString('id-ID', {
        dateStyle: 'long',
        timeStyle: 'short'
    });

    // Format pesan WhatsApp
    const whatsappMessage = 
`📌 *PESANAN BARU – WEBSITE PERCETAKAN*

👤 Nama Pemesan:
${name}

📧 Email:
${email}

🖨️ Detail Pesanan:
${message}

⏰ Waktu Pemesanan:
${now}

Mohon segera ditindaklanjuti 🙏`;

    // Nomor WhatsApp (format internasional tanpa +)
    const whatsappNumber = '6282172074158';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirect langsung ke WhatsApp
    window.location.href = whatsappUrl;

    // Reset form
    this.reset();
});
