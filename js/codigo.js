function calcular() {


    //Obtener datos del aprendiz
    var nombre = document.getElementById("nombre").value
    var apellido = document.getElementById("apellido").value
    var ficha = document.getElementById("ficha").value
    var trimestre = document.getElementById("trimestre").value
    //imprimir informacion del aprendiz

    //obtener la primera competencia a evaluar
    var primeraCompetencia = document.getElementById("primeraCompetencia").value

    //obtener notas de la primera competencia
    var nota1PrimeraCompetencia = document.getElementById("nota1Competencia1").value
    var nota2PrimeraCompetencia = document.getElementById("nota2Competencia1").value
    var nota3PrimeraCompetencia = document.getElementById("nota3Competencia1").value

    //imprimir notas y primera compentencia a evaluar


    //obtener la segunda competencia a evaluar
    var segundacompetencia = document.getElementById("segundacompetencia").value

    //obtener notas de la segunda competencia
    var segundaCompetencian1 = document.getElementById("segundaCompetencian1").value
    var segundaCompetencian2 = document.getElementById("segundaCompetencian2").value
    var segundaCompetencian3 = document.getElementById("segundaCompetencian3").value



    //mostrar informacion ingresada
    alert("Aprendiz " + nombre + " " + apellido + " De la ficha-> " + ficha + " Del-> " + trimestre)
    alert("Primera competencia a evaluar-> " + primeraCompetencia + " Nota 1-> " + nota1PrimeraCompetencia + " Nota 2-> " + nota2PrimeraCompetencia + " Nota 3-> " + nota3PrimeraCompetencia)
    alert("Segunda competencia a evaluar-> " + segundacompetencia + " Nota 1-> " + segundaCompetencian1 + " Nota 2-> " + segundaCompetencian2 + " Nota 3-> " + segundaCompetencian3)


    //convertir texto de notas a numeros de la primera competencia

    var n1p = parseFloat(nota1PrimeraCompetencia)
    var n2p = parseFloat(nota2PrimeraCompetencia)
    var n3p = parseFloat(nota3PrimeraCompetencia)

    //convertir texto de notas a numeros de la segunda competencia

    var n1s = parseFloat(segundaCompetencian1)
    var n2s = parseFloat(segundaCompetencian2)
    var n3s = parseFloat(segundaCompetencian3)

    //operaciones de promedio

    var promedioPrimeraCompetencia = (n1p + n2p + n3p) / 3
    var promedioSegundaCompetencia = (n1s + n2s + n3s) / 3
    var promedioTrimestre = (promedioPrimeraCompetencia + promedioSegundaCompetencia) / 2
    var definitiva = promedioTrimestre.toFixed(1)

    if (definitiva >= 3.5) {
        alert("APROBASTE")
    } else {
        alert("REPROBASTE BASTARDO")
    }

}







