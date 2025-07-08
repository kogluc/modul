import { komutuIsle } from './modul/komutIsleyici.js';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("komutBtn")?.addEventListener("click", () => {
    komutuIsle("tema");
  });
});
