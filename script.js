// Fungsi Kirim Pesan ke WhatsApp
function pesanProduk(namaProduk) {
    const nomorWA = "6283128891612";
    const closingQuote = "Terima kasih sudah checkout! 🛒 Semoga kamu puas dengan hasilnya. Satu langkah lebih dekat menuju tampilan digital yang lebih profesional. Happy growing! 📈💫";
    
    const pesan = `Halo FREEGOOW, saya mau pesan *${namaProduk}* dong! ✨\n\n${closingQuote}`;
    
    const urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
    window.open(urlWA, '_blank');
}

// Efek Muncul Saat Scroll (Scroll Reveal)
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    const triggerBottom = window.innerHeight / 5 * 4;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Inisialisasi style awal untuk animasi scroll
document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s ease-out';
});
