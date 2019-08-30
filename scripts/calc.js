function calcular(value){
    var n1 = document.getElementById('num1').value;
    var n2 = document.getElementById('num2').value;
    value === 'sumar' ? alert(`La suma es ${parseInt(n1) + parseInt(n2)}`) :  alert(`La resta es ${parseInt(n1) - parseInt(n2)}`) 
}