let quest = "";
let desi = "";
const programm = (message_a)=>{
desi = prompt(message_a).toLocaleLowerCase()
abfrage()
}
function abfrage(){
    desi === "f" ? document.write(switchCase("Die Fläche","Geometrische Fläche eingeben",f)):document.write(switchCase("Das Volumen","Geometrischen Körper eingeben",k)) 
        function switchCase(x,y,z){
        quest = prompt(y).toLocaleLowerCase()
            switch (quest){
        case "quadrat":
            return `<h4>${x} des Quadrates Beträgt: ${quadrat(z)} AE^2</h4>`
        case "rechteck":
            return `<h4>${x} des Rechteckes Beträgt: ${rechteck(z)} AE^2</h4>`
        case "dreieck":
            return `<h4>${x} des Dreieckes Beträgt: ${dreieck(z)} AE^2</h4>`
        case "kreis":
            return `<h4>${x} des Kreises Beträgt: ${kreis(z)} AE^2</h4>`
        case "parallelogramm":
            return `<h4>${x} des Parallelogrammes Beträgt: ${parallelogramm(z)} AE^2</h4>`
        case "trapetz":
            return `<h4>${x} des Trapetz Beträgt: ${trapetz(z)} AE^2</h4>`
        case "ellipse":
            return `<h4>${x} der Ellipse Beträgt: ${ellipse(z)} AE^2</h4>`
        case "rechtmäßiges vieleck":
            return `<h4>${x} des rechtmäßigen Vieleckes Beträgt: ${rechtmäßiges_vieleck(z)} AE^2</h4>`
        default:
            document.write(programm("Eingabe ungültig\rBitte erneut versuchen"))
            return ""
        }
    }
}
function quadrat(z){
    z === "f" ? fläche():volumen()
const fläche = ()=>{
        let a = parseFloat(prompt("Bitte länge der Seite a eingeben:"))
        return a*a
    }
const volumen = ()=>{
        let a = parseFloat(prompt("Bitte länge der Seite a eingeben:"))
        return a*a*a
}
}
function rechteck(z){
    z === "f" ? fläche():volumen()
    const fläche = ()=>{
    let a = parseFloat(prompt("Bitte länge der Seite a eingeben:"))
    let b = parseFloat(prompt("Bitte länge der Seite b eingeben:"))
    return a*b
    }
    const volumen = ()=>{
    let a = parseFloat(prompt("Bitte länge der Seite a eingeben:"))
    let b = parseFloat(prompt("Bitte länge der Seite b eingeben:"))
    let c = parseFloat(prompt("Bitte länge der Seite c eingeben:"))
    return a*b*c
    }
}
function dreieck(z){
    z === "f" ? fläche():volumen()
    const fläche = ()=>{
    let a = parseFloat(prompt("Bitte länge der Seite a eingeben:"))
    let b = parseFloat(prompt("Bitte länge der Seite b eingeben:"))
    return 0.5*a*b
    }
    const volumen = ()=>{
        let a = parseFloat(prompt("Bitte länge der Grundseite a eingeben:"))
        let b = parseFloat(prompt("Bitte länge der Grundseite b eingeben:"))
        let h = parseFloat(prompt("Bitte länge der Höhe h eingeben:"))
    return (1/3)*a*b*h
    }
}
function kreis(z){
    z === "f" ? fläche():volumen()
    const fläche = ()=>{
    let r = parseFloat(prompt("Bitte Radius r des Kreises eingeben:"))
    return Math.PI*r*r
    }
    const volumen = ()=>{
    let r = parseFloat(prompt("Bitte Radius r des Kreises eingeben:"))
    return (4/3)*Math.PI*r*r*r
    }
}
function parallelogramm(z){
    z === "f" ? fläche():volumen()
    const fläche = ()=>{
    let g = parseFloat(prompt("Bitte länge der Seite g eingeben:"))
    let h = parseFloat(prompt("Bitte länge der Seite h eingeben:"))
    return g*h
    }
    const volumen = ()=>{
    let g = parseFloat(prompt("Bitte länge der Seite g eingeben:"))
    let h = parseFloat(prompt("Bitte länge der Seite h eingeben:"))
    return g*h
    }
}
function trapetz(z){
    z === "f" ? fläche():volumen()
    let a = parseFloat(prompt("Bitte länge der Seite a eingeben:"))
    let b = parseFloat(prompt("Bitte länge der Seite b eingeben:"))
    let h = parseFloat(prompt("Bitte länge der Seite h eingeben:"))
    return 0.5*(a+b)*h
}
function ellipse(z){
    z === "f" ? fläche():volumen()
    let a = parseFloat(prompt("Bitte länge der Seite a eingeben:"))
    let b = parseFloat(prompt("Bitte länge der Seite b eingeben:"))
    return Math.PI*a*b
}
function rechtmäßiges_vieleck(z){
    z === "f" ? fläche():volumen()
    let a = parseFloat(prompt("Bitte Winkee a eingeben:"))
    let r = parseFloat(prompt("Bitte länge der Seite r eingeben:"))
    return (a/360)*Math.PI*r*r
}
programm("Flächenberechnung oder Volumenberechnung?\r(F oder R)");