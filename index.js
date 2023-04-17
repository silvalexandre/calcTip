const country = 'pt-BR';
const currency = {style: 'currency', currency: 'BRL'}


function update(){
    let bill = Number(document.getElementById("yourBill").value)
    
    let tipPercent = document.getElementById("tipInput").value

    let split = document.getElementById("splitInput").value

    let tipValue = bill * (tipPercent / 100)
    
    let billTotal = bill + tipValue 

    let billEach = billTotal / split

    
    document.getElementById('tipPercent').innerHTML = tipPercent + "%"
    document.getElementById('tipValue').innerHTML = tipValue.toLocaleString(country, currency)

    document.getElementById('totalWithTip').innerHTML = billTotal.toLocaleString(country, currency)

    document.getElementById('splitValue').innerHTML = split + ' amigos'

    document.getElementById('billEach').innerHTML = billEach.toLocaleString(country, currency)
}   