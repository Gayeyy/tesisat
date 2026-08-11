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
├── sitemap.xml       → Arama motorları site haritası
├── robots.txt        → Tarayıcı kuralları + sitemap bildirimi
├── og-image.jpg      → Sosyal medya paylaşımda çıkan görsel (1200x630)
├── firtina-web-sitesi.html → Tek dosyalık teslim sürümü (WhatsApp için)
└── README.md
```

## 🔍 SEO (Arama Motoru Optimizasyonu)
Aşağıdaki SEO dosyaları ve etiketleri eklenmiştir:

- **sitemap.xml** → Google'a site yapısını bildirir. Domain yayına alındıktan sonra
  `https://firtinasukacaktespiti.com/sitemap.xml` adresinden erişilebilir.
- **robots.txt** → Arama motorlarına izin verir ve sitemap'i tanıtır.
- **og-image.jpg** → Site linki WhatsApp/Facebook/Instagram'da paylaşıldığında çıkan görsel.
- **JSON-LD (LocalBusiness)** → `index.html` ve `firtina-web-sitesi.html` `<head>` içinde gömülüdür.
  Google'a işletmenin adını, telefonunu, bölgesini ve çalışma saatlerini yapısal olarak bildirir.
  → "Rize su tesisatçısı" gibi aramalarda Google Haritalar & bilgi kutusunda çıkmayı kolaylaştırır.
- **Meta etiketleri**: canonical, robots, Open Graph (Facebook), Twitter Card, theme-color,
  geo (Rize konumu) eklendi.

### Domain değişirse ne yapmalı?
Tüm etiketler `https://firtinasukacaktespiti.com` domain'ine göre yazıldı. Domain değişirse
`index.html` ve `firtina-web-sitesi.html` içinde `firtinasukacaktespiti.com`'u yeni domain ile
arat-değiştir yap, ayrıca `sitemap.xml` ve `robots.txt` içindeki URL'leri de güncelle.

### Google'a siteyi tanıtmak (canlıya aldıktan sonra)
1. [Google Search Console](https://search.google.com/search-console) → site ekle → sahiplik doğrula.
2. "Sitemap" bölümünden `sitemap.xml` gönder.
3. [Google Business Profile](https://www.google.com/business) → ücretsiz işletme kaydı aç
   (haritada çıkmak için en önemli adım).

## ⚠️ Canlıya Atmadan Önce: Google Kodlarını Değiştir (YER TUTUCU)
`index.html` ve `firtina-web-sitesi.html` `<head>` başında **yer tutucu** kodlar var.
Hesapları açıp gerçek kodları buraya yapıştır — yoksa Search Console doğrulanmaz ve Analytics
saymaz.

### 1) Search Console doğrulama kodu
```
<meta name="google-site-verification" content="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX">
```
- Search Console → mülk ekle → doğrulama yöntemi **"HTML etiketi"** → sana verdiği `content="..."`
  içindeki uzun kodu `XXXX...XXX` yerine yapıştır.

### 2) Google Analytics (GA4) — 2 yeri de değiştir
```
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
...
      gtag('config', 'G-XXXXXXXXXX');
```
- [analytics.google.com](https://analytics.google.com) → mülk ekle → sana verilen `G-XXXXXXXXXX`
  kodunu **2 yere** (script src ve config satırı) yapıştır.

> İpucu: Her iki dosyada da `G-XXXXXXXXXX` ve `XXXX` aratın → kaç yer geçtiğını görürsünüz.

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
