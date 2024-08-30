function tabuada(){
    var num = parseInt(document.getElementById('num').value);
    var mult=0;
    for(var i=0;i<=10;i++){
        mult = num*i;
        document.getElementById('local').value += `${num} X ${i} = ${mult}\n`;
    }
}