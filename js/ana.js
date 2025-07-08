window.komutuIsle = async function(komut) {
  switch (komut) {
    case 'dark':
      const temaModul = await import('./modul/temaDegistirici.js');
      temaModul.temayiUygula?.("dark");
      break;

    case "light":
      const temaModul = await import('./modul/temaDegistirici.js');
      temaModul.temayiUygula("light");
      break;

    case 'veri':
      const veriModul = await import('./modul/veriYukleyici.js');
      veriModul.verileriYukle();
      break;

    default:
      alert("Bilinmeyen komut: " + komut);
  }
}
