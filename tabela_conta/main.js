var idf;

function calc_op(){
    var valor1 = parseFloat($("input[type=number][name=v1]").val());
    var valor2 = parseFloat($("input[type=number][name=v2]").val());
    var res = $("input[type=number][name=resposta]");

    if (idf == 0){
        $(res).val(valor1+valor2);
    } else if (idf == 1) {
        $(res).val(valor1-valor2);
    } else if (idf == 2) {
        $(res).val(valor1*valor2);
    } else if (idf == 3) {
        $(res).val(valor1/valor2);
    } else {
        alert('Marque uma das opções!');
    }


}



function idf_muda(x){
    idf = x;
}