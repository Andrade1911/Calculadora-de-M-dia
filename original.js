var nome = "Andrade"

var notaDoPrimeiroBimestre = Number(prompt("Sua nota do Primeiro Bimestre foi?"))
 
while(notaDoPrimeiroBimestre < 0 || notaDoPrimeiroBimestre > 10){
  notaDoPrimeiroBimestre = Number(prompt("POR GENTILEZA É MAIOR QUE ZERO E MENOR QUE 10, obrigado."))
}


var notaDoSegundoBimestre = Number(prompt("Sua nota do Segundo Bimestre foi?"))
 
while(notaDoSegundoBimestre < 0 || notaDoSegundoBimestre > 10){
  notaDoSegundoBimestre = Number(prompt("POR GENTILEZA É MAIOR QUE ZERO E MENOR QUE 10, obrigado."))
}


 var notaDoTerceiroBimestre = Number(prompt("Sua nota do Terceiro Bimestre foi?"))
 
while(notaDoTerceiroBimestre < 0 || notaDoTerceiroBimestre > 10){
  notaDoTerceiroBimestre = Number(prompt("POR GENTILEZA É MAIOR QUE ZERO E MENOR QUE 10, obrigado."))
}
    

 var notaDoQuartoBimestre = Number(prompt("Sua nota do Quarto Bimestre foi?"))
 
while(notaDoQuartoBimestre < 0 || notaDoQuartoBimestre > 10){
  notaDoQuartoBimestre = Number(prompt("POR GENTILEZA É MAIOR QUE ZERO E MENOR QUE 10, obrigado."))
}

  
var médiaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = médiaFinal.toFixed(2)

     
console.log("Então " + nome + " sua nota  é " + médiaFinal)

if(médiaFinal < 6 ) {
 console.log("Você é BIZONHO") 
} else {
  console.log("Vecê passou")
}
