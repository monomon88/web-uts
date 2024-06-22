document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk menampilkan data pesanan
    const loadPesanan = () => {
        const pesananContent = document.getElementById('pesanan-content');
        fetch('file:///D:/web-logistic/index.html#pesanan')
            .then(response => response.json())
            .then(data => {
                let pesananHTML = '<ul>';
                data.forEach(pesanan => {
                    pesananHTML += `<li>ID: ${pesanan.id}, Nama: ${pesanan.nama}, Status: ${pesanan.status}</li>`;
                });
                pesananHTML += '</ul>';
                pesananContent.innerHTML = pesananHTML;
            })
            .catch(error => {
                pesananContent.innerHTML = '<p>Gagal memuat data pesanan. Silakan coba lagi nanti.</p>';
                console.error('Error fetching pesanan:', error);
            });
    };

document.getElementById("signup-link").addEventListener("click", function() {
   window.location.href = "signup.html";
    });

    // Fungsi untuk menampilkan data produk
    const loadProduk = () => {
        const produkContent = document.getElementById('produk-content');
        fetch('file:///D:/web-logistic/index.html#produk')
            .then(response => response.json())
            .then(data => {
                let produkHTML = '<ul>';
                data.forEach(produk => {
                    produkHTML += `<li>ID: ${produk.id}, Nama: ${produk.nama}, Harga: ${produk.harga}</li>`;
                });
                produkHTML += '</ul>';
                produkContent.innerHTML = produkHTML;
            })
            .catch(error => {
                produkContent.innerHTML = '<p>Gagal memuat data produk. Silakan coba lagi nanti.</p>';
                console.error('Error fetching produk:', error);
            });
    };

    // Fungsi untuk menampilkan data gudang
    const loadGudang = () => {
        const gudangContent = document.getElementById('gudang-content');
        fetch('file:///D:/web-logistic/index.html#gudang')
            .then(response => response.json())
            .then(data => {
                let gudangHTML = '<ul>';
                data.forEach(gudang => {
                    gudangHTML += `<li>ID: ${gudang.id}, Lokasi: ${gudang.lokasi}, Kapasitas: ${gudang.kapasitas}</li>`;
                });
                gudangHTML += '</ul>';
                gudangContent.innerHTML = gudangHTML;
            })
            .catch(error => {
                gudangContent.innerHTML = '<p>Gagal memuat data gudang. Silakan coba lagi nanti.</p>';
                console.error('Error fetching gudang:', error);
            });
    };

    // Fungsi untuk menampilkan data pengiriman
    const loadPengiriman = () => {
        const pengirimanContent = document.getElementById('pengiriman-content');
        fetch('file:///D:/web-logistic/index.html#pe')
            .then(response => response.json())
            .then(data => {
                let pengirimanHTML = '<ul>';
                data.forEach(pengiriman => {
                    pengirimanHTML += `<li>ID: ${pengiriman.id}, Tujuan: ${pengiriman.tujuan}, Status: ${pengiriman.status}</li>`;
                });
                pengirimanHTML += '</ul>';
                pengirimanContent.innerHTML = pengirimanHTML;
            })
            .catch(error => {
                pengirimanContent.innerHTML = '<p>Gagal memuat data pengiriman. Silakan coba lagi nanti.</p>';
                console.error('Error fetching pengiriman:', error);
            });
    };

    // Panggil fungsi untuk memuat data saat halaman siap
    loadPesanan();
    loadProduk();
    loadGudang();
    loadPengiriman();
});