# MikroTik Script Generator - Web-Based

**MikroTik Script Generator** adalah aplikasi berbasis web yang memungkinkan pengguna membuat skrip konfigurasi MikroTik dengan cepat dan mudah tanpa perlu login atau registrasi.

## 📄 Struktur Halaman

### **1. Landing Page**

- **Hero Section:** UI modern dengan CTA "Mulai Sekarang"
- **Cara Kerja:** Animasi interaktif (Pilih Template ➝ Isi Parameter ➝ Generate Skrip ➝ Copy/Paste ke MikroTik)
- **Testimoni Pengguna:** Slider responsif

### **2. Halaman Generator Skrip**

- **Form Parameter:** Input dropdown, checkbox, dan text field
- **Live Preview Skrip:** Syntax highlighting dengan auto-scroll
- **Kategori Konfigurasi:**
  - **Routing & Firewall** (NAT, Load Balancing, Failover, Static Routing)
  - **Queue & QoS** (Simple Queue, Queue Tree, PCQ)
  - **Hotspot & PPPoE** (Hotspot QR Code Generator, Easy Hotspot Wizard)
  - **Protection & Backup** (Auto Backup, Netwatch ke Telegram)
  - DLL
## 📦 Instalasi & Menjalankan Proyek

### **1. Clone Repository**

```bash
git clone https://github.com/username/mikrotik-script-generator.git
cd mikrotik-script-generator
```

### **2. Menjalankan Backend (Node.js)**

```bash
cd backend
npm install
npm start
```

### **3. Menjalankan Frontend (React/Vue)**

```bash
cd frontend
npm install
npm run dev
```

### **4. Menjalankan dengan Docker**

```bash
docker-compose up -d
```

## 🌐 Deployment

### **1. Deploy Frontend ke Vercel**

```bash
vercel deploy
```

### **2. Deploy Backend ke VPS (Ubuntu/Debian)**

```bash
# Jalankan di VPS
pm install -g pm2
pm start &
```

## 📜 Lisensi

Proyek ini dirilis di bawah lisensi **MIT License**. Silakan gunakan dan kontribusi!

## 🤝 Kontribusi

Kami membuka kesempatan bagi siapa saja yang ingin berkontribusi dalam pengembangan proyek ini. Silakan fork dan buat pull request! ✨

## 📞 Kontak & Dukungan

Jika ada pertanyaan atau ingin berdiskusi lebih lanjut, hubungi saya di:

- Instagram: [@rahman.zip](https://instagram.com/rahman.zip)
- Saweria (Dukung Pengembangan): [Saweria.co/Rahmanizm](https://saweria.co/Rahmanizm)

