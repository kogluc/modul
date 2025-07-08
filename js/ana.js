window.komutuIsle = async function(komut) {
  switch (komut) {
    case 'koyu':
      const temaModul = await import('./modul/temaDegistirici.js');
      temaModul.temayiUygula?.("dark");
      break;
      
    case 'acik':
      const temaModul = await import('./modul/temaDegistirici.js');
      temaModul.temayiUygula?.("acik");
      break;
      
    case 'veri':
      const veriModul = await import('./modul/veriYukleyici.js');
      veriModul.verileriYukle();
      break;

    default:
      alert("Bilinmeyen komut: " + komut);
  }
}
