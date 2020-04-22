function calcular() {
    var altura = document.getElementById('txtalt')
    var peso = document.getElementById('txtpeso')
    var res = document.getElementById('resultado')
    
    if (altura.value.length == 0 || peso.value.length == 0) {
        window.alert('ERRO! Verifique os dados e tente novamente') 
    } else {
        var imc = Number(peso.value) / Number(altura.value) ** 2
    }
    res.innerText = `Seu IMC é de ${imc.toFixed(2)}`
}