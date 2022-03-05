var nome;
var notaDoPrimeiroBimestre;
var notaDoSegundoBimestre;
var notaDoTerceiroBimestre;
var notaDoQuartoBimestre;
var mediaFinal;
var notaFixada;
var erro;


function armazenarNome() {
  nome = document.getElementById("yourName").value;
  document.getElementById("name").classList.toggle("display-none");
  document.getElementById("oneBimester").classList.toggle("display-none");
}

function armazenarNota1() {
  notaDoPrimeiroBimestre = document.getElementById("oneNote").value;
  if(notaDoPrimeiroBimestre < 0 || notaDoPrimeiroBimestre > 10){
    error = document.getElementById("errorOneNote");
    document.getElementById("errorOneNote").classList.toggle("display-none");
    document.getElementById("oneBimester").classList.toggle("display-none");
  } else {
    document.getElementById("oneBimester").classList.toggle("display-none");
    document.getElementById("twoBimester").classList.toggle("display-none");
  } 
  console.log (notaDoPrimeiroBimestre);
}

function armazenarNota2() {
  notaDoSegundoBimestre = document.getElementById("twoNote").value;
  if(notaDoSegundoBimestre < 0 || notaDoSegundoBimestre > 10){
    error = document.getElementById("erroTwoNote");
    document.getElementById("erroTwoNote").classList.toggle("display-none");
    document.getElementById("twoBimester").classList.toggle("display-none");
  } else{
    document.getElementById("twoBimester").classList.toggle("display-none");
    document.getElementById("threeBimester").classList.toggle("display-none");
  }
  console.log (notaDoSegundoBimestre);
}

function armazenarNota3() {
  notaDoTerceiroBimestre = document.getElementById("threeNote").value;
  if(notaDoTerceiroBimestre < 0 || notaDoTerceiroBimestre > 10){
    error = document.getElementById("erroThreeNote");
    document.getElementById("erroThreeNote").classList.toggle("display-none");
    document.getElementById("threeBimester").classList.toggle("display-none");
  } else{
    document.getElementById("threeBimester").classList.toggle("display-none");
    document.getElementById("fourBimester").classList.toggle("display-none");
  }
  console.log (notaDoTerceiroBimestre);
}

function armazenarNota4() {
  notaDoQuartoBimestre = parseInt(document.getElementById("fourNote").value);
  if(notaDoQuartoBimestre < 0 || notaDoQuartoBimestre > 10){
    error = document.getElementById("erroFourNote");
    document.getElementById("erroFourNote").classList.toggle("display-none");
    document.getElementById("fourBimester").classList.toggle("display-none");
  } else{
    document.getElementById("fourBimester").classList.toggle("display-none");
    document.getElementById("calculate").classList.toggle("display-none");
  }
  console.log (notaDoQuartoBimestre);
}

function calcularNotaFianl() {
  mediaFinal = (+notaDoPrimeiroBimestre + +notaDoSegundoBimestre + +notaDoTerceiroBimestre + notaDoQuartoBimestre) * 0.25;
  notaFixada = mediaFinal.toFixed(2);
  document.getElementById("calculate").classList.toggle("display-none");
  document.getElementById("yourResult").classList.toggle("display-none");
  resultadoNotaFinal();
}

function resultadoNotaFinal() {
  document.getElementById("result").innerHTML = "Olá " + nome + " sua nota  é " + mediaFinal + " e " + inndiceApRep();
  console.log (mediaFinal);
}

function inndiceApRep() {
  if(mediaFinal < 6 ) {
    return "você é reprovou de ano"; 
  } else {
      return "vecê passou de ano";
    }
}
