console.log("komutIsleyici.js çalıştı");
window.komutIsleyiciKur = function () {
  console.log("komutIsleyiciKur fonksiyonu çağrıldı");
  return {
    komutuIsle: function (komut) {
      console.log("komutuIsle çalıştı:", komut);
      alert("Komut işlendi: " + komut);
    }
  };
};
