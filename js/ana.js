
(function () {
  console.log("ana.js yüklendi");

  const script = document.createElement('script');
  script.src = 'js/modul/komutIsleyici.js';
  script.onload = () => {
    console.log("komutIsleyici.js yüklendi");

    document.addEventListener('DOMContentLoaded', () => {
      console.log("DOM yüklendi");

      if (typeof window.komutIsleyiciKur === "function") {
        const isleyici = window.komutIsleyiciKur();
        window.komutuIsle = isleyici.komutuIsle;

        const btn = document.getElementById("komutBtn");
        if (btn) {
          btn.addEventListener("click", () => {
            console.log("Butona tıklandı");
            window.komutuIsle?.("Butona tıklandı");
          });
        } else {
          console.warn("Buton bulunamadı");
        }
      } else {
        alert("komutIsleyiciKur fonksiyonu bulunamadı!");
        console.error("window.komutIsleyiciKur yok");
      }
    });
  };

  script.onerror = () => {
    alert("komutIsleyici.js YÜKLENEMEDİ!");
    console.error("Script load error: js/modul/komutIsleyici.js");
  };

  document.head.appendChild(script);
})();
