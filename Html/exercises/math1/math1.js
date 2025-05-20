let quest = "", desi = "";
const programm = (message_a) => {
    desi = prompt(message_a).toLocaleLowerCase()
    abfrage()
}
function abfrage() {
    desi === "f" ? document.write(switchCase("Geometrische Fläche eingeben", "Die Fläche", "f")) : document.write(switchCase("Geometrischen Körper eingeben", "Das Volumen", "k"))
    function switchCase(x, y, z) {
        quest = prompt(x).toLocaleLowerCase()
        switch (quest) {
            case "quadrat" || "würfel":
                return `<h4>${y} des Quadrates Beträgt: ${quadrat_würfel(z)} AE^2</h4>`
            case "rechteck" || "quader":
                return `<h4>${y} des Rechteckes Beträgt: ${rechteck_quader(z)} AE^2</h4>`
            case "dreieck" || "pyramiede":
                return `<h4>${y} des Dreieckes Beträgt: ${dreiec_pyramiedek(z)} AE^2</h4>`
            case "kreis" || "kugel":
                return `<h4>${y} des Kreises Beträgt: ${kreis_kugel(z)} AE^2</h4>`
            case "parallelogramm":
                return `<h4>${y} des Parallelogrammes Beträgt: ${parallelogramm(z)} AE^2</h4>`
            case "trapetz":
                return `<h4>${y} des Trapetz Beträgt: ${trapetz(z)} AE^2</h4>`
            case "ellipse":
                return `<h4>${y} der Ellipse Beträgt: ${ellipse(z)} AE^2</h4>`
            case "rechtmäßiges vieleck" || "prisma":
                return `<h4>${y} des rechtmäßigen Vieleckes Beträgt: ${r_vieleck_prisma(z)} AE^2</h4>`
            default:
                document.write(programm("Eingabe ungültig\rBitte erneut versuchen"))
                return ""
        }
    }
}
function quadrat_würfel(z) {
    z === "f" ? fläche() : volumen()
    const fläche = () => {
        let a = parseFloat(prompt("Bitte Länge der Seite a eingeben:"))
        return a * a
    }
    const volumen = () => {
        let a = parseFloat(prompt("Bitte Länge der Seite a eingeben:"))
        return a * a * a
    }
}
function rechteck_quader(z) {
    z === "f" ? fläche() : volumen()
    const fläche = () => {
        let a = parseFloat(prompt("Bitte Länge der Seite a eingeben:"))
        let b = parseFloat(prompt("Bitte Länge der Seite b eingeben:"))
        return a * b
    }
    const volumen = () => {
        let a = parseFloat(prompt("Bitte Länge der Seite a eingeben:"))
        let b = parseFloat(prompt("Bitte Länge der Seite b eingeben:"))
        let c = parseFloat(prompt("Bitte Länge der Seite c eingeben:"))
        return a * b * c
    }
}
function dreiec_pyramiedek(z) {
    z === "f" ? fläche() : volumen()
    const fläche = () => {
        let a = parseFloat(prompt("Bitte Länge der Seite a eingeben:"))
        let b = parseFloat(prompt("Bitte länge der Seite b eingeben:"))
        return 0.5 * a * b
    }
    const volumen = () => {
        let a = parseFloat(prompt("Bitte länge der Grundseite a eingeben:"))
        let b = parseFloat(prompt("Bitte länge der Grundseite b eingeben:"))
        let h = parseFloat(prompt("Bitte länge der Höhe h eingeben:"))
        return (1 / 3) * a * b * h
    }
}
function kreis_kugel(z) {
    z === "f" ? fläche() : volumen()
    const fläche = () => {
        let r = parseFloat(prompt("Bitte Radius r des Kreises eingeben:"))
        return Math.PI * r * r
    }
    const volumen = () => {
        let r = parseFloat(prompt("Bitte Radius r des Kreises eingeben:"))
        return (4 / 3) * Math.PI * r * r * r
    }
}
function parallelogramm(z) {
    z === "f" ? fläche() : false
    const fläche = () => {
        let g = parseFloat(prompt("Bitte länge der Seite g eingeben:"))
        let h = parseFloat(prompt("Bitte länge der Seite h eingeben:"))
        return g * h
    }
}
function trapetz(z) {
    z === "f" ? fläche() : false
    let a = parseFloat(prompt("Bitte länge der Seite a eingeben:"))
    let b = parseFloat(prompt("Bitte länge der Seite b eingeben:"))
    let h = parseFloat(prompt("Bitte länge der Seite h eingeben:"))
    return 0.5 * (a + b) * h
}
function ellipse(z) {
    z === "f" ? fläche() : false
    let a = parseFloat(prompt("Bitte länge der Seite a eingeben:"))
    let b = parseFloat(prompt("Bitte länge der Seite b eingeben:"))
    return Math.PI * a * b
}
function r_vieleck_prisma(z) {
    z === "f" ? fläche() : volumen()
    const fläche = () => {
        let a = parseFloat(prompt("Bitte Winkee a eingeben:"))
        let r = parseFloat(prompt("Bitte länge der Seite r eingeben:"))
        return (a / 360) * Math.PI * r * r
    }
    const volumen = () => {
        let g = prompt("Grundfläche")
        let a = parseFloat(prompt("Bitte Winkee a eingeben:"))
        let r = parseFloat(prompt("Bitte länge der Seite r eingeben:"))
        return (a / 360) * Math.PI * r * r
    }
}
programm("Flächenberechnung oder Volumenberechnung?\r(F oder V)");