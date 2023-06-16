    // Mendapatkan elemen dengan ID "tanggal"
    const tanggalElement = document.getElementById('tanggal');

    // Mendapatkan tanggal sekarang
    const tanggalSekarang = new Date();

    // Format tanggal (misal: 1 Januari 2023)
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const tanggalFormatted = tanggalSekarang.toLocaleDateString('id-ID', options);

    // Menampilkan tanggal di dalam elemen "tanggal"
    tanggalElement.innerHTML = `<p>Tanggal: ${tanggalFormatted}</p>`;