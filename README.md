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
- Mendesain tampilan tanpa framework CSS
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
## 📁 Struktur Folder
WEB3-OPEN-DONASI/
│
├── backend/
│   ├── node_modules/
│   ├── routes/
│   │   ├── donation.js
│   │   └── transactions.js
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   │
│   ├── src/
│   │   ├── component/
│   │   │   ├── Wallet.js
│   │   │   ├── Wallet.css
│   │   │   ├── SendDonation.js
│   │   │   ├── DonationList.js
│   │   │   └── TransactionNotes.js
│   │   │
│   │   ├── services/
│   │   │   └── blockchain.js
│   │   │
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   │
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
│
├── smart-contract/
│   └── OpenDonation.sol
│
├── README.md


