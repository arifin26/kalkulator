var masukkan = prompt("masukkan simbol..")
var satu = prompt("angka 1")
var dua = prompt("angka 2")

switch (masukkan) {
    case "+":
        var jumlah = parseInt(satu) + parseInt(dua);
        document.write("hasil : " + jumlah);
        break;
    case "-":
        var kurang = parseInt(satu) - parseInt(dua)
        document.write("hasil :" + kurang)
    case '*':
        var kali = parseInt(satu) * parseInt(dua)
        document.write('Hasil : ' + kali)
        break;
    case '/':
        var bagi = parseInt(satu) / parseInt(dua)
        document.write('Hasil : ' + parseFloat(bagi))
    case "%":
        var persen = parseInt(satu) - parseInt(dua)
        document.write("hasil :" + kurang)

    default:
        break;
}