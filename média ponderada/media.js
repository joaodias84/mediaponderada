function calcularMediaPonderada(notaProva1, notaProva2, notaProva3) {
    if (isNaN(notaProva1) || isNaN(notaProva2) || isNaN(notaProva3)) {
      throw new Error("Por favor, digite apenas números válidos para as notas.");
    }
  
    var pesoProva1 = 2;
    var pesoProva2 = 3;
    var pesoProva3 = 5;
  
    var somaPesos = pesoProva1 + pesoProva2 + pesoProva3;
    var mediaFinal = (notaProva1 * pesoProva1 + notaProva2 * pesoProva2 + notaProva3 * pesoProva3) / somaPesos;
  
    return mediaFinal.toFixed(2);
  }
  
  function calcularMedia() {
    var notaProva1 = parseFloat(document.getElementById("notaProva1").value);
    var notaProva2 = parseFloat(document.getElementById("notaProva2").value);
    var notaProva3 = parseFloat(document.getElementById("notaProva3").value);
  
    try {
      var mediaFinal = calcularMediaPonderada(notaProva1, notaProva2, notaProva3);
  
      document.getElementById("resultado").innerHTML = "A média final do aluno é: " + mediaFinal;
    } catch (error) {
      document.getElementById("resultado").innerHTML = error.message;
    }
  }
  