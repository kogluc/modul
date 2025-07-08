function temaDegistiriciyiKur() {
  const dropdown = document.getElementById("themeDropdown");
  if (!dropdown) return;

  dropdown.addEventListener("change", () => {
    document.body.setAttribute("data-tema", dropdown.value);
    console.log("Tema değişti:", dropdown.value);
  });
}
