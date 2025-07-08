export function temayiUygula(tema) {
  alert("Tema uygulandı: " + tema);

  if (tema === 'dark') {
    document.body.style.background = '#111';
    document.body.style.color = '#fff';
  } else {
    document.body.style.background = '#fff';
    document.body.style.color = '#000';
  }
}
