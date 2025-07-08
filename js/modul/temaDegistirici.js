export function temayiUygula(tema) {
  alert("Tema uygulandı: " + tema);
  document.body.style.background = tema === 'dark' ? '#111' : '#fff';
  document.body.style.color = tema === 'dark' ? '#fff' : '#000';
}
