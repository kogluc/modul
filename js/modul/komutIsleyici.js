export async function komutuIsle(komut) {
  switch (komut) {
    case "dark":
      const temaModul = await import('./temaDegistirici.js');
      temaModul.temayiUygula("dark");
      break;
      
  case "light":
      const temaModul = await import('./temaDegistirici.js');
      temaModul.temayiUygula("light");
      break;

    case "veri":
      const veriModul = await import('./veriYukleyici.js');
      veriModul.verileriYukle();
      break;

    default:
      console.warn("Tanımsız komut:", komut);
      alert("Tanımsız komut: " + komut);
  }
}
