function komutIsleyiciKur() {
  function komutuIsle(komut) {
    console.log("Komut çalıştı:", komut);
    alert("Komut: " + komut);
  }

  return {
    komutuIsle
  };
}
