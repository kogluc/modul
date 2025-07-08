const moduller = [
  'js/modul/sayfaYukleyici.js',
  'js/modul/temaDegistirici.js',
  'js/modul/mobilMenu.js',
  'js/modul/uyariSistemi.js',
  'js/modul/tooltips.js',
  'js/modul/commitGecmisi.js',
  'js/modul/apiCekirdegi.js',
  'js/modul/komutIsleyici.js'
];

// Script dosyalarını sırayla yükleyen fonksiyon
function loadScript(url) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = url;
    s.onload = () => {
      console.log(`Yüklendi: ${url}`);
      resolve();
    };
    s.onerror = () => reject(new Error("Script yüklenemedi: " + url));
    document.head.appendChild(s);
  });
}

// Başlatıcı fonksiyon
async function baslat() {
  try {
    // Modülleri sırayla yükle
    for (const mod of moduller) {
      await loadScript(mod);
    }

    // DOM yüklendikten sonra sistem başlat
    document.addEventListener('DOMContentLoaded', () => {
      sayfayiBaslat?.();
      temaDegistiriciyiKur?.();
      mobilMenuyuKur?.();

      const isleyici = komutIsleyiciKur?.();

      // Fonksiyonları global erişilebilir hale getir
      window.uyariGoster = uyariSistemi?.uyariGoster;
      window.komutuIsle = isleyici?.komutuIsle;

      console.log("Sistem başarıyla başlatıldı.");
    });
  } catch (err) {
    console.error("Modül yükleme hatası:", err);
  }
}

// Sistemi çalıştır
baslat();
