function Compter_mots() {
    let text = document.getElementById("text").value;

    text = text.trim();
    
    let mots = text.split(/\s+/);

    let nombre_de_mots = mots.length;

    if (text === "") {
        document.getElementById("resultat").textContent = 0;
        return;
      }

    document.getElementById("resultat").innerText = nombre_de_mots
}