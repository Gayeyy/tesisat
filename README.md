# Fırtına Su Kaçağı Tespiti — Web Sitesi

Modern, mobil uyumlu ve hızlı tek sayfalık kurumsal web sitesi. Dış bağımlılık yoktur; yalnızca
Google Fonts internetten yüklenir. Tüm ikonlar siteye gömülüdür (SVG), bu yüzden kırık görsel çıkmaz.

## 📁 Dosya Yapısı
```
tesisat/
├── index.html        → Sayfanın tüm içeriği
├── css/
│   └── style.css     → Tüm tasarım / stiller
├── js/
│   └── script.js     → Menü, animasyon, yukarı çık butonu
└── README.md
```

## 🚀 Nasıl Yayınlanır?
- **Yerelde önizleme:** `index.html` dosyasına çift tıklayarak tarayıcıda açabilirsiniz.
- **Yayınlama:** Tüm klasörü herhangi bir hosting'e (cPanel, Hostinger, Netlify, GitHub Pages,
  Vercel vb.) yüklemeniz yeterli. `index.html` ana sayfadır.

## ✏️ Mevcut Bilgiler (girildi)
Aşağıdaki bilgiler siteye işlendi:

### 📞 Telefon numaraları (iki hat)
- **0538 025 47 37** → `tel:+905380254737` (birincil, tüm "Hemen Ara" butonları ve WhatsApp)
- **0545 123 53 53** → `tel:+905451235353` (ikincil, üst şerit + hero + iletişim + footer)
- **WhatsApp** şu an **0538** hattına bağlı: `https://wa.me/905380254737`
  (Eğer WhatsApp numarası 0545 ise söyle, hepsini 0545'e çevireyim.)

### 📍 Hizmet bölgeleri
Ardeşen, Fındıklı, Pazar, Çamlıhemşin, Çayeli, Tunca ve Çevre Köyler, Arhavi, Hopa, Artvin.
Başlık: "Rize Ardeşen ve Çevresine Hızlı Servis".

### 📷 Instagram
`@firtinasukacaktespiti` (doğru).

### ⏳ Adres / Konum
Henüz girilmedi — konumu gönderdiğinde ekleyeceğim (Google Haritalar ile birlikte).

### ✏️ Bilgileri değiştirmek istersen
`index.html` içinde arat-değiştir yap:
- Numara değişikliği için: `0538 025 47 37` / `tel:+905380254737` / `wa.me/905380254737`
- İkinci hat: `0545 123 53 53` / `tel:+905451235353`
- Tel link formatı: `tel:+905XXXXXXXXX` (ülke kodu + numara, boşluksuz)
- Bölgeler: `#bolgeler` bölümündeki `area-tag` etiketleri
- Adres: footer'daki "Adresinizi buraya ekleyin" yazısı

### İstatistikler (opsiyonel)
Hero bölümündeki "10+ Yıl", "5000+ Müşteri" rakamlarını kendi verilerinize göre düzenleyebilirsiniz.

## 🎨 Renkler
Tema artık **teal/yeşilimsi-mavi + koyu antrasit** (mavi ağırlıklı görünümden çıkıp daha premium
hale getirildi). Değiştirmek için `css/style.css` üstündeki `:root` değişkenlerini düzenleyin.
Ana marka rengi: `--blue-600` (teal), koyu zemin: `--gradient-deep`, parlak geçiş: `--gradient-blue`.

## 📱 Özellikler
- ✅ Tamamen mobil uyumlu (responsive)
- ✅ Hamburger menü (mobil)
- ✅ Sabit (sticky) header
- ✅ Scroll ile beliren animasyonlar
- ✅ Yüzen WhatsApp butonu
- ✅ Yukarı çık butonu
- ✅ S.S.S. akordeon
- ✅ SEO meta etiketleri
- ✅ Hızlı yükleme (harici görsel yok)

---
© Fırtına Su Kaçağı Tespiti
