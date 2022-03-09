header=document.querySelector("header")
body=document.querySelector("body")
input=document.querySelector("input")
body=document.querySelector("body")
tab=document.querySelector("table")
th=document.querySelector("th")
document.getElementById("reg").onclick = adc
function adc(){
  if(pes.value.length>0 && alt.value.length>0 && nom.value.length>0){
	  let nom = document.getElementById("nom").value
	  let alt = document.getElementById("alt").value
	  let pes = document.getElementById("pes").value
	  let imc = parseFloat(pes/(alt*alt))
	  if (imc < 17){
		imc = ("Imc: " + imc.toFixed(2) + " (peso baixo)")
	  } else if (imc >= 18.5 && imc < 24.9){
		imc = ("Imc: " + imc.toFixed(2) + " (peso ideal)")
	  } else if (imc >= 25 && imc < 29.9){
		imc = ("Imc: " + imc.toFixed(2) + " (peso à cima do ideal)")
	  } else if (imc >= 30  && imc < 38.9){
		imc = ("Imc: " + imc.toFixed(2) + " (peso alto)")
	  } else if(imc > 39){
		imc = ("Imc: " + imc.toFixed(2) + " (peso muito alto)")
	  }
	  th=document.createElement("th")
	  tr=document.createElement("tr")
	  th.append(nom)
	  tr.append(th)
	  tab.append(tr)

	  th=document.createElement("th")
	  th.append(alt)
	  tr.append(th)
	  tab.append(tr)

	  th=document.createElement("th")
	  th.append(pes)
	  tr.append(th)
	  tab.append(tr)

	  th=document.createElement("th")
	  th.append(imc)
	  tr.append(th)
	  tab.append(tr)

	  document.getElementById("nom").value=""
	  document.getElementById("pes").value=""
	  document.getElementById("alt").value=""
	  document.getElementById("nom").placeholder="Digite seu nome:"
	  document.getElementById("pes").placeholder="Digite seu peso:"
	  document.getElementById("alt").placeholder="Digite sua altura:"
  }else{
	nom.placeholder = "Valor inválido"
	pes.placeholder = "Valor inválido"
	alt.placeholder = "Valor inválido"
   }
}