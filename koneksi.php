<?php
$host = "lsm_db";
$username = "admin";
$password = "123";
$database = "lsm_db";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$database", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "Koneksi berhasil";
} catch (PDOException $e) {
    die("Koneksi gagal: " . $e->getMessage());
}

$query = "SELECT * FROM pengiriman";
try {
    $stmt = $pdo->query($query);
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    die("Query gagal dijalankan: " . $e->getMessage());
}

echo "<h3>Data Pengiriman</h3>";
echo "<table border='1'>
        <tr>
            <th>ID Pengiriman</th>
            <th>ID Produk</th>
            <th>ID Pesanan</th>
            <th>Jumlah</th>
            <th>Tanggal Pesanan</th>
        </tr>";
foreach ($results as $row) {
    echo "<tr>";
    echo "<td>" . htmlspecialchars($row['id_pengiriman']) . "</td>";
    echo "<td>" . htmlspecialchars($row['id_produk']) . "</td>";
    echo "<td>" . htmlspecialchars($row['id_pesanan']) . "</td>";
    echo "<td>" . htmlspecialchars($row['jumlah']) . "</td>";
    echo "<td>" . htmlspecialchars($row['tanggal_pesanan']) . "</td>";
    echo "</tr>";
}
echo "</table>";

// Menutup koneksi database
$pdo = null;
?>
