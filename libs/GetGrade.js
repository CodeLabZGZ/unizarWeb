export default function GetGrade(num) {
    if (num === 1) return "Primero"
    else if (num === 2) return "Segundo"
    else if (num === 3) return "Tercero"
    else if (num === 4) return "Cuarto"
    else if (num === 5) return "Quinto"
    else if (num === 6) return "Sexto"
    else if (num === 7) return "Séptimo"
    else if (num === 8) return "Octavo"
    else return num.toString()
}