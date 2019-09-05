function calcular(val){
    var n1 = document.getElementById('num1').value
    var n2 = document.getElementById('num2').value
    var result = document.getElementById('result')
    val == '+' ? result.innerHTML = `${parseInt(n1) + parseInt(n2)}` : val === '-' ? result.innerHTML = `${parseInt(n1) - parseInt(n2)}` : val == '*' ? result.innerHTML = `${parseInt(n1) * parseInt(n2)}` : val === '/' ? result.innerHTML = `${parseInt(n1) / parseInt(n2)}` : alert('Incorrecto')
    cleanInputs()
}
const cleanInputs = () => {
    document.getElementById('num1').value = ''
    document.getElementById('num2').value = ''
}
const deleteResult = () => result.innerHTML = ''