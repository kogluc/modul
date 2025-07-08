(function () {
  const script = document.createElement('script');
  script.src = 'js/modul/komutIsleyici.js';
  script.onload = () => {
    document.addEventListener('DOMContentLoaded', () => {
      const isleyici = window.komutIsleyiciKur?.();
      if (isleyici) {
        window.komutuIsle = isleyici.komutuIsle;
        const btn = document.getElementById("komutBtn");
        btn?.addEventListener("click", () => {
          window.komutuIsle?.("GitHub Pages üzerinden çalıştı!");
        });
      }
    });
  };
  script.onerror = () => {
    console.error("komutIsleyici.js yüklenemedi.");
  };
  document.head.appendChild(script);
})();
