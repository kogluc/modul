const modulURL = location.origin + "/js/modul/";

window.komutuIsle = async function(komut) {
  switch (komut) {
    case 'dark':
    case 'light':
      {
        const temaModul = await import(`${modulURL}temaDegistirici.js`);
        temaModul.temayiUygula(komut);
      }
      break;

    case 'veri':
      {
        const veriModul = await import(`${modulURL}veriYukleyici.js`);
        veriModul.verileriYukle();
      }
      break;

    default:
      alert("Bilinmeyen komut: " + komut);
  }
};

// Sayfa yüklendiğinde butonlara event ekle
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("button[data-komut]").forEach(button => {
    button.addEventListener("click", () => {
      const komut = button.getAttribute("data-komut");
      window.komutuIsle(komut);
    });
  });
});
