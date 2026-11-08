// Mostra un banner sulla privacy in fondo alla pagina.
// Il banner resta visibile finché l'utente non clicca "Ho capito".
window.addEventListener("load", function () {
  var banner = document.createElement("div");
  banner.id = "privacy-banner";

  var testo = document.createElement("span");
  testo.textContent =
    "Questo sito è un progetto didattico: non raccoglie dati personali e non usa cookie di profilazione.";

  var bottone = document.createElement("button");
  bottone.textContent = "Ho capito";
  bottone.addEventListener("click", function () {
    banner.remove();
  });

  banner.appendChild(testo);
  banner.appendChild(bottone);
  document.body.appendChild(banner);
});
