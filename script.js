let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');  // Perbaiki di sini, pakai querySelectorAll

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        // Menambahkan class 'active' pada tiap span dengan delay
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);  // Memberikan delay untuk tiap span
        });

        setTimeout(() => {
            // Menambahkan class 'fade' setelah beberapa waktu
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            });
        }, 2000);  // Waktu delay sebelum fade dimulai

        setTimeout(() => {
            // Menyembunyikan intro setelah beberapa waktu
            intro.style.top = '-100vh';
        }, 3000);  // Menyembunyikan intro dengan animasi
    });
});
