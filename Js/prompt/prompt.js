// Nachricht mit allen Möglichkeiten
let nachricht = "🌟 Willkommen! 🌟\n\n"; // Emojis und Zeilenumbrüche
nachricht += "💡 Optionen:\n";
nachricht += "\t1️⃣ Neue Datei erstellen\n"; // Tabulatoren und Emojis
nachricht += "\t2️⃣ Datei öffnen\r\n";
nachricht += "\t3️⃣ Beenden\n\n";
nachricht += "⭐ Hinweis:\n\"Wähle eine gültige Option, um fortzufahren.\"\n"; // Anführungszeichen und weitere Zeilenumbrüche
nachricht += "--------------------------------\n"; // Trennlinie
nachricht += "\u2713 Deine Eingabe wird verarbeitet..."; // Unicode-Zeichen (✓)

let eingabe = prompt(nachricht); // Prompt zeigt alle Formatierungen an

// Ergebnis anzeigen
document.write("Deine Auswahl: ", eingabe);
document.close();
let bestaetigen = confirm("Möchtest du fortfahren?");
if (bestaetigen) {
    document.write("Benutzer möchte fortfahren.");
} else {
    document.write("Benutzer hat abgebrochen.");
}