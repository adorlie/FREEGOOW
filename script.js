// Fungsi untuk mengirim pesan otomatis ke WhatsApp saat tombol produk diklik
function pesanProduk(namaProduk) {
    const nomorWA = "6283128891612";
    const pesan = `Halo FREEGOOW, saya ingin memesan produk: ${namaProduk}. \n\nTerima kasih sudah checkout! 🛒 Semoga kamu puas dengan hasilnya. Satu langkah lebih dekat menuju tampilan digital yang lebih profesional. Happy growing! 📈💫`;
    
    // Encode pesan untuk URL
    const urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
    
    // Buka WhatsApp di tab baru
    window.open(urlWA, '_blank');
}

// Tambahan: Smooth scroll untuk link navigasi (opsional karena CSS sudah menangani)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
