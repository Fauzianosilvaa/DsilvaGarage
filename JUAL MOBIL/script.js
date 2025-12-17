document.addEventListener('DOMContentLoaded', function () {

    /* ==============================
       ORDER MOBIL → WHATSAPP
    ============================== */
    const orderButtons = document.querySelectorAll('.order-btn');

    orderButtons.forEach(button => {
        button.addEventListener('click', function () {
            const carName = this.getAttribute('data-car');
            const carPrice = this.getAttribute('data-price');
            const phoneNumber = '6282172074158'; // tanpa 0 dan +

            const message = `Halo DSILVA GARAGE,%0A%0A` +
                            `Saya ingin memesan mobil:%0A` +
                            `Nama Mobil: ${carName}%0A` +
                            `Harga: Rp ${carPrice}`;

            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
    });


    /* ==============================
       FORM KONTAK → WHATSAPP
    ============================== */
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); // mencegah reload halaman

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const message = document.getElementById("message").value;

            const whatsappNumber = "6282172074158";

            const whatsappMessage =
                `Halo DSILVA GARAGE,%0A%0A` +
                `Nama: ${name}%0A` +
                `Email: ${email}%0A` +
                `Telepon: ${phone}%0A%0A` +
                `Pesan:%0A${message}`;

            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
            window.open(whatsappURL, "_blank");

            contactForm.reset();
        });
    }

});
