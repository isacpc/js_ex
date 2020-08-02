function tabuada() {
    var tab = document.getElementById('tabuada')
    var num = parseInt(document.getElementById('numC').value)

    if (document.getElementById('numC').value == "") {
        alert('Insira um valor')
    } else {
        tab.innerHTML = ''
        for(var x = 1; x < 11; x++) {
            tab.innerHTML += `${num} x ${x} = ${num*x} \n`
        }
    }


}