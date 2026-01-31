# REFLEKSI PROYEK PEMROGRAMAN WEB
- Nama        : IID MUJAHID
- NIM         : 241111102
- Prodi/Kelas : Informatika 24C
- Fakultas    : Teknologi Informasi, Universitas Nahdlatul Ulama Yogyakarta



# 🌐 Web3 Donasi Blockchain

Platform donasi transparan berbasis **Blockchain Ethereum (Sepolia Testnet)** yang memungkinkan pengguna untuk:
- Menghubungkan wallet (MetaMask)
- Mengirim donasi ETH
- Melihat daftar transaksi donasi secara transparan
- Memverifikasi transaksi melalui Etherscan

Project ini bertujuan untuk menerapkan konsep **Web3, desentralisasi, dan transparansi** dalam sistem donasi digital.

---

## 📌 Latar Belakang

Sistem donasi konvensional sering kali menghadapi permasalahan transparansi, di mana donatur tidak dapat memverifikasi secara langsung alur dana yang mereka kirimkan.  
Dengan memanfaatkan teknologi Blockchain, setiap transaksi donasi dapat dicatat secara permanen, publik, dan tidak dapat dimanipulasi.

Blockchain Ethereum menyediakan mekanisme **trustless system**, sehingga kepercayaan tidak lagi bergantung pada satu pihak terpusat, melainkan pada jaringan.

---

## 🎯 Tujuan Project

- Mengimplementasikan sistem donasi berbasis Web3
- Mengintegrasikan wallet Ethereum (MetaMask)
- Mengirim ETH pada jaringan Sepolia Testnet
- Menampilkan catatan transaksi donasi secara transparan
- Menerapkan React sebagai frontend modern

---

## 🧱 Teknologi yang Digunakan

### Frontend
- React.js
- JavaScript (ES6+)
- CSS (tanpa Tailwind)
- Ethers.js

### Blockchain
- Ethereum Sepolia Testnet
- MetaMask Wallet
- Etherscan (untuk verifikasi transaksi)

### Backend (Opsional)
- Node.js
- Express.js
- REST API (transaction logs)


## 🚀 Fitur Utama

### 🔐 Wallet Integration
- Menghubungkan wallet Ethereum menggunakan MetaMask
- Menampilkan status koneksi wallet

### 💸 Kirim Donasi
- Mengirim ETH melalui jaringan Sepolia
- Konfirmasi transaksi langsung di MetaMask

### 📜 Catatan Transaksi
- Menampilkan histori donasi
- Setiap transaksi dapat diverifikasi melalui Etherscan

### 🌍 Transparansi
- Data transaksi bersifat publik
- Mendukung konsep open-donation

---

## ⚠️ Tantangan dalam Pengembangan Scara Teknis dan Non Teknis
# Teknis
Struktur Project Full-Stack
Kesalahan penempatan folder dan package.json menyebabkan error seperti ENOENT dan npm start gagal dijalankan.
React Hooks & State Management
Penggunaan useEffect memerlukan dependency yang tepat agar data transaksi dan pagination berjalan sinkron.
Integrasi Wallet & Blockchain
Menghubungkan MetaMask dengan React memerlukan validasi jaringan (Sepolia) serta penanganan akun dan izin wallet.
Perbedaan Versi Ethers.js
Perubahan API antara Ethers v5 dan v6 menimbulkan error dan membutuhkan penyesuaian kode.
Asynchronous Transaction Handling
Transaksi blockchain bersifat tidak instan sehingga perlu pengelolaan loading, konfirmasi, dan error state.
Sinkronisasi Data On-Chain & Off-Chain
Menyatukan data blockchain dan API backend membutuhkan format dan waktu update yang konsisten.
UI Tanpa Framework CSS
Mendesain tampilan manual menuntut konsistensi dan kete
# Non-Teknis
Kurva Pembelajaran Web3
Konsep blockchain, wallet, dan smart contract membutuhkan waktu untuk dipahami secara menyeluruh.
Manajemen Waktu & Fokus
Pengembangan full-stack memerlukan pembagian waktu antara frontend, backend, dan blockchain.
Desain User Experience (UX)
Menyederhanakan konsep blockchain agar mudah dipahami oleh pengguna awam
Debugging & Problem Solving
Membutuhkan ketelitian dan kesabaran karena error sering muncul dari berbagai layer sistem.
Perencanaan Pengembangan
Menentukan prioritas fitur agar project tetap terarah dan selesai tepat waktu.

### 1. Konfigurasi Project React
- Error `Missing script: start`
- Struktur folder tidak sesuai dengan `package.json`
- Kesalahan import komponen

### 2. Integrasi Web3 & MetaMask
- Perbedaan API `ethers v5` dan `ethers v6`
- Penanganan async transaction (`await tx.wait()`)
- Validasi jaringan Sepolia

### 3. Error React Hooks
- Warning `react-hooks/exhaustive-deps`
- Penggunaan `useEffect` dengan dependency yang tidak lengkap

### 4. UI/UX
- Mendesain tampilan pakai framework CSS
- Menjaga UI tetap bersih dan mudah dipahami
- Menyusun komponen agar scalable

### 5. Transparansi Data
- Sinkronisasi data on-chain dan off-chain
- Menampilkan data transaksi dalam bentuk yang mudah dibaca pengguna awam

---

## 🧠 Pembelajaran yang Didapat

- Pemahaman dasar Web3 dan Blockchain
- Cara kerja wallet dan transaksi Ethereum
- Integrasi React dengan blockchain
- Manajemen state dan lifecycle React
- Debugging error pada environment JavaScript modern

---

## 🔮 Pengembangan Selanjutnya

- Integrasi Smart Contract khusus donasi
- Listener event on-chain (DonationEvent)
- Penyimpanan transaksi ke database
- Support multi-network (Polygon, BSC)
- Dashboard analitik donasi
- Deployment ke production

---

## 👨‍💻 Author

**Iid Mujahid**  
Web3 & Blockchain Enthusiast  
React & JavaScript Developer  

---

## 📄 License

This project is licensed under the **MIT License**.

---
## 🛠️ Langkah-Langkah Membuatan Project ini

Pengembangan project **WEB3-OPEN-DONASI** dilakukan melalui beberapa tahapan terstruktur untuk memastikan sistem berjalan dengan baik dan sesuai tujuan.

### 1. Perencanaan Sistem
Tahap awal dimulai dengan menentukan tujuan aplikasi, yaitu membangun sistem donasi berbasis blockchain yang transparan dan terdesentralisasi. Pada tahap ini ditentukan arsitektur aplikasi **full-stack**, yang terdiri dari frontend, backend, dan smart contract.

---

### 2. Persiapan Lingkungan Pengembangan
Menyiapkan lingkungan pengembangan dengan menginstal perangkat dan tools pendukung, antara lain:
- Node.js dan npm
- MetaMask sebagai wallet Ethereum
- Library pendukung seperti React.js dan Ethers.js  
Jaringan **Ethereum Sepolia Testnet** dipilih sebagai lingkungan simulasi transaksi.

---

### 3. Pembuatan Struktur Project
Menyusun struktur folder project yang memisahkan setiap bagian sistem, yaitu:
- **Frontend** untuk antarmuka pengguna berbasis React
- **Backend** untuk REST API menggunakan Node.js dan Express.js
- **Smart Contract** untuk logika donasi menggunakan Solidity  

Struktur ini memudahkan pengembangan, pemeliharaan, dan pengujian sistem.

---

### 4. Pengembangan Smart Contract
Membuat smart contract donasi menggunakan bahasa **Solidity** yang berfungsi untuk:
- Menerima donasi ETH
- Mencatat transaksi donasi ke blockchain
- Menyediakan data donasi yang dapat dibaca oleh frontend  

Smart contract dijalankan dan diuji pada jaringan Sepolia Testnet.

---

### 5. Pengembangan Backend
Backend dikembangkan menggunakan **Node.js dan Express.js** dengan tujuan:
- Menyediakan endpoint REST API
- Mengelola data transaksi (dummy atau off-chain)
- Mendukung kebutuhan data frontend  

Backend berperan sebagai pendukung data non-blockchain.

---

### 6. Pengembangan Frontend
Frontend dibangun menggunakan **React.js** dengan fitur utama:
- Menghubungkan wallet MetaMask
- Menampilkan saldo wallet pengguna
- Mengirim donasi ETH
- Menampilkan daftar dan catatan transaksi donasi  

Frontend diintegrasikan dengan Ethers.js untuk berinteraksi langsung dengan blockchain.

---

### 7. Integrasi Blockchain
Integrasi blockchain dilakukan menggunakan **Ethers.js**, yang mencakup:
- Inisialisasi provider dan signer
- Validasi jaringan Ethereum Sepolia
- Pengiriman transaksi donasi
- Pembacaan data dari smart contract  

Tahap ini memastikan aplikasi dapat berkomunikasi dengan jaringan blockchain secara aman.

---

### 8. Pengujian dan Debugging
Melakukan pengujian pada setiap bagian sistem untuk memastikan fungsionalitas berjalan dengan baik, meliputi:
- Pengujian koneksi wallet
- Pengujian transaksi donasi
- Penanganan error dan warning pada React
- Debugging konfigurasi dependency dan environment

---

### 9. Penyempurnaan Fitur dan Tampilan
Melakukan penyempurnaan pada tampilan antarmuka dan fitur aplikasi agar lebih mudah digunakan, termasuk:
- Penambahan catatan transaksi
- Informasi status transaksi
- Penyusunan UI yang lebih terstruktur dan informatif

---

### 10. Dokumentasi Project
Tahap akhir adalah penyusunan dokumentasi dalam bentuk **README.md**, yang berisi:
- Deskripsi project
- Struktur folder
- Teknologi yang digunakan
- Langkah-langkah pengembangan
- Tantangan teknis dan non-teknis

Dokumentasi ini bertujuan untuk memudahkan pemahaman dan pengembangan lanjutan.

---

